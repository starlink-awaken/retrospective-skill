#!/usr/bin/env bun

/**
 * Retrospective Tool - 复盘工具
 *
 * 快速回顾项目/任务，提炼经验教训，更新知识库
 *
 * 用法:
 *   bun Tools/Retrospective.ts "项目描述"
 *   bun Tools/Retrospective.ts "任务结果"
 */

import { subprocess } from "bun";

// 工具元数据
const TOOL = {
  name: "retrospective",
  description: "复盘项目/任务，提炼经验教训",
  parameters: {
    project: {
      type: "string",
      description: "项目描述或任务结果",
      required: true,
    },
    depth: {
      type: "string",
      description: "复盘深度: quick/standard/deep",
      default: "quick",
    },
  },
};

interface RetroResult {
  project: string;
  timestamp: string;
  lessons: string[];
  suggestions: string[];
  principles: string[];
  memoryUpdated: boolean;
}

// 主函数
async function run(args: string[]): Promise<string> {
  const project = args[0] || "";
  const depth = args[1] || "quick";

  if (!project) {
    return `❌ 需要输入项目描述

用法:
  bun Tools/Retrospective.ts "项目描述"
  bun Tools/Retrospective.ts "任务结果" [深度]

深度:
  quick     - 快速复盘 (3条教训)
  standard  - 标准复盘 (5条教训)
  deep      - 深度复盘 (完整分析)`;
  }

  console.log(`🔄 开始复盘: ${project}`);
  console.log(`📊 复盘深度: ${depth}`);
  console.log("");

  // 调用 Algorithm agent 进行复盘
  const result = await runRetrospective(project, depth);

  // 输出结果
  return formatOutput(result);
}

async function runRetrospective(project: string, depth: string): Promise<RetroResult> {
  // 这里可以调用 Algorithm agent 或 LLM 进行分析
  // 简化版：直接返回模板

  const timestamp = new Date().toISOString().split("T")[0];

  // 基于项目描述生成教训和建议
  const lessons = await extractLessons(project, depth);
  const suggestions = await generateSuggestions(lessons, project);
  const principles = await mapToPrinciples(lessons);

  // 更新 MEMORY
  await updateMemory(project, lessons, suggestions, principles);

  return {
    project,
    timestamp,
    lessons,
    suggestions,
    principles,
    memoryUpdated: true,
  };
}

async function extractLessons(project: string, depth: string): Promise<string[]> {
  // 调用 LLM 提取教训
  const prompt = `
从以下项目/任务中提取 3-5 条核心教训:

"${project}"

深度: ${depth}

输出格式:
- 每条教训用一句话总结
- 包含: 问题 + 原因 + 改进方向

示例:
1. 用户需求未验证会导致方向错误
2. 成本估算需要保守估计
3. 技术选型必须先做 POC
`;

  // 这里应该是 LLM 调用，简化处理
  return [
    "项目缺乏明确的问题定义",
    "缺少用户需求验证",
    "成本估算过于乐观",
    "技术选型未经验证",
  ];
}

async function generateSuggestions(lessons: string[], project: string): Promise<string[]> {
  return lessons.map((lesson) => {
    if (lesson.includes("用户需求")) {
      return "前置用户调研，至少 5 个访谈";
    }
    if (lesson.includes("成本")) {
      return "使用保守估计，增加 50% 缓冲";
    }
    if (lesson.includes("技术选型")) {
      return "先做 POC，再上生产";
    }
    return "建立验证机制";
  });
}

async function mapToPrinciples(lessons: string[]): Promise<string[]> {
  // 将教训映射到核心原则
  const mapping: Record<string, string[]> = {
    用户需求: ["1. 用户需求验证定律"],
    成本: ["2. ROI 保守主义", "7. 隐性成本倍增器"],
    技术选型: ["9. 技术选型验证律"],
    问题定义: ["3. XY Problem 警惕机制"],
    竞品: ["5. 竞品沉默 = 警告"],
    分析: ["4. 多代理分析 ROI"],
    决策: ["10. 分阶段决策框架"],
  };

  const principles: string[] = [];
  const projectText = lessons.join(" ");

  for (const [key, value] of Object.entries(mapping)) {
    if (projectText.includes(key)) {
      principles.push(...value);
    }
  }

  // 添加默认原则
  if (principles.length === 0) {
    principles.push("8. 可测量 = 可管理");
  }

  return [...new Set(principles)];
}

async function updateMemory(
  project: string,
  lessons: string[],
  suggestions: string[],
  principles: string[]
): Promise<void> {
  const timestamp = new Date().toISOString().split("T")[0];
  const month = timestamp.substring(0, 7); // 2026-02

  const content = `# 复盘: ${project}

**时间**: ${timestamp}
**教训**: ${lessons.length} 条
**原则**: ${principles.length} 条

## 教训
${lessons.map((l, i) => `${i + 1}. ${l}`).join("\n")}

## 建议
${suggestions.map((s, i) => `${i + 1}. ${s}`).join("\n")}

## 关联原则
${principles.map((p) => `- ${p}`).join("\n")}
`;

  // 写入 MEMORY
  const path = `~/.claude/MEMORY/LEARNING/RETROSPECTIVE/${month}/quick/${timestamp}-auto.md`;
  await Bun.write(path.replace("~", process.env.HOME || ""), content);

  console.log(`✅ 已更新 MEMORY: ${path}`);
}

function formatOutput(result: RetroResult): string {
  return `
╔══════════════════════════════════════════════════════════════╗
║                    📋 复盘结果                              ║
╠══════════════════════════════════════════════════════════════╣
║  项目: ${result.project.substring(0, 40).padEnd(40)}║
║  时间: ${result.timestamp}                                      ║
╠══════════════════════════════════════════════════════════════╣
║  🔥 核心教训 (${result.lessons.length} 条)                          ║
║                                                              ║
${result.lessons.map((l, i) => `║  ${i + 1}. ${l.substring(0, 46).padEnd(46)}║`).join("\n")}
║                                                              ║
║  💡 改进建议 (${result.suggestions.length} 条)                          ║
║                                                              ║
${result.suggestions.map((s, i) => `║  ${i + 1}. ${s.substring(0, 46).padEnd(46)}║`).join("\n")}
║                                                              ║
║  📚 关联原则 (${result.principles.length} 条)                          ║
║                                                              ║
${result.principles.map((p) => `║  • ${p.padEnd(47)}║`).join("\n")}
║                                                              ║
║  💾 MEMORY: ${result.memoryUpdated ? "✅ 已更新" : "❌ 未更新"}                              ║
╚══════════════════════════════════════════════════════════════╝
`;
}

// CLI 入口
if (import.meta.main) {
  const args = process.argv.slice(2);
  run(args).then(console.log);
}

export { run, TOOL };
