# Standard Retrospective Workflow

**类型：** Standard (标准复盘)
**耗时：** 25分钟
**适用：** 中型项目、阶段完成、功能发布

---

## 📋 Workflow Steps

### Step 1: 触发（自动/手动）

**自动检测：**
- "项目完成了"
- "第一阶段结束了"
- "功能上线了"

**手动触发：**
```
/retrospective standard
```

### Step 2: 并行分析（5分钟）

**3个Agent并行执行：**

**experience_analyzer**
- 分析成功经验
- 分析失败教训
- 识别关键决策点

**knowledge_extractor**
- 提取技术知识
- 提取流程知识
- 提取最佳实践

**pattern_matcher**
- 匹配23个成功模式
- 匹配9个失败模式
- 识别新模式

### Step 3: 深度综合（15分钟）

**4个Agent串行执行：**

**sop_generator** (3-4分钟)
- 生成SOP文档
- 更新现有SOP
- 创建检查清单

**guideline_updater** (2-3分钟)
- 更新行为准则
- 识别新准则需求
- 标记准则冲突

**memory_architect** (3-4分钟)
- 更新MEMORY结构
- 创建索引
- 链接相关知识

**visualizer** (2-3分钟)
- 生成雷达图
- 对比历史数据
- 创建可视化报告

### Step 4: MEMORY更新（3分钟）

**更新内容：**
1. 经验库
2. 知识库
3. 模式库
4. SOP库
5. 准则库
6. 雷达图数据

### Step 5: 报告生成（2分钟）

**报告内容：**
- 执行摘要
- 经验教训
- 知识提炼
- SOP文档
- 行为准则更新
- 雷达图
- 改进建议

---

## 📊 输出产物

### 1. 复盘报告

```markdown
# 标准复盘：{project_name}

**时间：** {timestamp}
**类型：** Standard
**耗时：** 25分钟

## 执行摘要
{summary}

## 成功经验
{successes}

## 失败教训
{failures}

## 知识提炼
{knowledge}

## SOP文档
{sop}

## 行为准则更新
{guidelines}

## 雷达图
{radar}

## 改进建议
{suggestions}
```

### 2. 雷达图

**6大维度评分：**
- 目标管理：X/10
- 知识管理：X/10
- 自动化：X/10
- AI协作：X/10
- 质量保障：X/10
- 创新能力：X/10

**可视化：**
```
        目标 (8)
         ▲
        / \
  创新(7) 知识(9)
    |     |
自动化(6) AI(8) 质量(7)
```

### 3. SOP文档

**新增/更新的SOP：**
- 编码SOP
- 调试SOP
- 评审SOP
- 部署SOP

---

## 🎯 成功标准

- ✅ 25分钟内完成
- ✅ 输出完整复盘报告
- ✅ 生成/更新至少1个SOP
- ✅ 更新行为准则
- ✅ 生成雷达图
- ✅ 记录到MEMORY

---

## 📈 示例场景

### 输入
```
用户："PAI深度复盘项目完成了，来个标准复盘"
```

### 执行
```
PAI：启动标准复盘模式...

[并行执行3个分析Agent - 5分钟]
✅ experience_analyzer完成
✅ knowledge_extractor完成
✅ pattern_matcher完成

[串行执行4个综合Agent - 15分钟]
✅ sop_generator完成（生成2个SOP）
✅ guideline_updater完成（更新3个准则）
✅ memory_architect完成（更新MEMORY）
✅ visualizer完成（生成雷达图）

[MEMORY更新 - 3分钟]
✅ 所有内容已保存到MEMORY

[报告生成 - 2分钟]
✅ 复盘报告已生成

总耗时：25分钟
```

### 输出

**报告：** `~/.claude/MEMORY/LEARNING/RETROSPECTIVE/2026-02/standard/pai-retrospective.md`

**关键内容：**
- ✅ 成功：5大行为准则、门禁系统设计
- ✅ 教训：轻量化设计的重要性
- ✅ 知识：Skill架构、Hook集成
- ✅ SOP：复盘SOP、准则更新SOP
- ✅ 准则：搜索优先、验证真实等
- ✅ 雷达图：6维度能力评估

---

## 🔧 与其他Skills集成

### 1. Agents Skill

**协作方式：**
```
retrospective → Agents.spawnParallel(
  "experience_analyzer",
  "knowledge_extractor",
  "pattern_matcher"
)
```

### 2. Gateway Skill

**协作方式：**
```
retrospective → Gateway.updateGuidelines(new_guidelines)
```

### 3. Obsidian Skill

**协作方式：**
```
retrospective → Obsidian.createNote(report)
```

---

## 📚 模板

### 报告模板

```markdown
# 标准复盘：{project_name}

**时间：** {date}
**类型：** Standard
**团队：** {team}

## 🎯 执行摘要

{one_paragraph_summary}

## 📊 项目数据

- **时长：** {duration}
- **规模：** {scope}
- **成果：** {outcomes}

## ✅ 成功经验

### 经验1：{title}
- **描述：** {description}
- **关键因素：** {factors}
- **可复用：** {reusable}

### 经验2：{title}
...

## ❌ 失败教训

### 教训1：{title}
- **问题：** {problem}
- **原因：** {root_cause}
- **改进：** {improvement}

## 🧠 知识提炼

### 技术知识
- {knowledge_1}
- {knowledge_2}

### 流程知识
- {process_1}
- {process_2}

## 📋 SOP文档

### 新增SOP
{new_sop}

### 更新SOP
{updated_sop}

## 📏 行为准则更新

### 新增准则
{new_guideline}

### 更新准则
{updated_guideline}

## 📊 雷达图

{radar_chart}

**对比上次：**
- 目标管理：上次X → 本次Y (±Z)
- 知识管理：上次X → 本次Y (±Z)
...

## 🚀 改进建议

### 短期（1周）
{suggestion_1}

### 中期（1月）
{suggestion_2}

### 长期（3月）
{suggestion_3}
```

---

**版本：** 1.0
**日期：** 2026-02-03
