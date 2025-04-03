---
title: 常见的算法思路
icon: file
order: 
date: ""
category:
  - 算法
tags:
  - LeetCode
---
## 方法技巧总结

### 深度优先搜索(回溯)算法
1. **适用场景**：
   - 连通性问题（如岛屿问题）
   - 路径搜索
   - 组合/排列问题

2. **实现要点**：
   - 清晰的递归终止条件
   - 标记已访问的节点，避免重复访问
   - 四向或八向探索（对于网格问题）
   - 回溯时恢复状态（某些情况需要）

3. **优化技巧**：
   - 直接在原数组上标记已访问状态，节省空间
   - 提前判断边界条件，减少不必要的递归(枝剪)

4. 例子：岛屿的最大面积（LeetCode 695）
**问题**：给定一个二维数组，其中 1 表示陆地，0 表示水域，找出最大的岛屿面积。

**思路**：
- 使用深度优先搜索(DFS)遍历二维数组
- 从每个未访问的陆地格子开始，探索相连的所有陆地
- 计算每个岛屿的面积，并找出最大值

**题解**：
```java
public int maxAreaOfIsland(int[][] grid) {
    int maxArea = 0;
    boolean[][] visited = new boolean[grid.length][grid[0].length];
    
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1 && !visited[i][j]) {
                maxArea = Math.max(maxArea, dfs(grid, i, j, visited));
            }
        }
    }
    return maxArea;
}

private int dfs(int[][] grid, int i, int j, boolean[][] visited) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || 
        visited[i][j] || grid[i][j] == 0) {
        return 0;
    }
    
    visited[i][j] = true;
    
    return 1 + dfs(grid, i+1, j, visited) + 
               dfs(grid, i-1, j, visited) + 
               dfs(grid, i, j+1, visited) + 
               dfs(grid, i, j-1, visited);
}
```


### 双指针
1. **适用场景**：
   - 对撞指针（如接雨水问题）
   - 快慢指针（如链表中点、环检测）
   - 滑动窗口

2. **实现要点**：
   - 明确指针移动的条件
   - 保持不变量（如接雨水中的最大高度）
   - 注意边界处理

3. **优化技巧**：
   - 跳过不必要的计算（如高度相同的连续柱子）
   - 提前结束循环的判断
   
4. 例子：接雨水（LeetCode 42）
**问题**：给定 n 个非负整数表示每个宽度为 1 的柱子的高度，计算按此排列的柱子，下雨之后能接多少雨水。

**思路**：
- 使用双指针技巧，从数组两端向中间移动
- 维护记录左右两侧的最大高度
- 每次移动高度较小的那一侧的指针，然后计算每个位置能接的雨水量

**题解**：
```java
    public int trap(int[] height) {
        int res = 0;                           // 存储总的接水量
        int left = 0, right = height.length - 1; // 左右指针，从两端向中间移动
        int maxL = height[left], maxR = height[right]; // 记录左右两侧的最大高度

        while (left < right) {                 // 当左右指针未相遇时继续循环
            if (maxL < maxR) {                 // 如果左侧是短板
                ++left;                         // 左指针向右移动
                if (height[left] >= maxL) {     // 如果当前位置高度大于等于左侧最大高度，说明这个位置不是个凹槽无法存储雨水
                    maxL = height[left];        // 更新左侧最大高度
                } else {
                    res = res + (maxL - height[left]); // 计算当前位置能接的水量并累加
                }
            } else {
                right--;// 如果右侧最大高度小于等于左侧最大高度
                if (height[right] >= maxR) {     // 如果当前位置高度大于等于左侧最大高度，说明这个位置不是个凹槽无法存储雨水
                    maxR = height[right];        // 更新左侧最大高度
                } else {
                    res = res + (maxR - height[right]); // 计算当前位置能接的水量并累加
                }
            }
        }
        return res;                            // 返回总接水量
    }
```

### 三指针
1. 适用场景：
	- 反转链表
	- 

2. **常见操作**：
   - 反转（全部或部分）
   - 合并
   - 找中点
   - 检测环

3. 例子：

eg 1: 反转链表（LeetCode 206）

**问题**：反转一个单链表。

**迭代方法思路**:
- 使用三个指针：前一个节点、当前节点和下一个节点
- 遍历链表，逐个反转节点的指向

**迭代解题模板**：
```java
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    
    while (curr != null) {
        ListNode nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    return prev;
}

```

eg 2: 合并两个有序数组
问题描述：nums1 = \[1,2,3,0,0,0\], m = 3, nums2 = \[2,5,], n = 3，**输出：**\[1,2,2,3,5,6\]

解题思路：
1. **反向遍历**：避免了正向遍历时可能覆盖nums1中尚未处理的元素
2. **三个指针**：
    - `pos`：指向nums1当前填充位置
    - `m`：指向nums1中有效元素的当前位置
    - `n`：指向nums2中元素的当前位置
3. **边界处理**：分别处理nums1或nums2遍历完的情况



eg 3: K 个一组翻转链表（LeetCode 25）

**问题描述**：
给你一个链表和一个整数 k，请你每 k 个节点一组进行翻转，返回翻转后的链表。如果节点总数不是 k 的整数倍，那么最后剩余的节点保持原有顺序。

**解题思路**：
1. 将链表分成若干个长度为 k 的子链表
2. 对每个子链表进行反转
3. 将反转后的子链表重新连接起来

**算法流程**：
1. 判断当前子链表是否有 k 个节点，如果不足 k 个，则不需要反转
2. 确定当前 k 个节点子链表的头节点(head)和尾节点后的节点(tail)
3. 反转这 k 个节点，反转后，原 head 变为当前组的尾节点，需要将其 next 指向下一组的头节点
4. 递归处理剩余的链表

**题解**：
```java
public ListNode reverseKGroup(ListNode head, int k) {
    // 确定当前k个节点组的结束位置(tail)
    ListNode tail = head;
    for (int i = 1; i <= k; i++) {
        // 如果不足k个节点，直接返回头节点，不进行反转
        if (tail == null) {
            return head;
        }
        tail = tail.next;
    }
    
    // 反转当前k个节点，得到新的头节点
    ListNode newHead = reverse(head, tail);
    
    // 递归反转剩余部分，并连接到当前已反转部分
    // 注意：反转后，原来的head变成了尾节点
    head.next = reverseKGroup(tail, k);
    
    return newHead;
}

// 反转[head, tail)之间的节点，不包括tail
private ListNode reverse(ListNode head, ListNode tail) {
    ListNode prev = null;
    ListNode curr = head;
    
    while (curr != tail) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev; // 返回反转后的新头节点
}
```


**时间复杂度**：O(n)，每个节点只会被访问常数次
**空间复杂度**：O(n/k)，递归调用栈的深度


### 快慢指针
1. 适用场景
	- 环检测
	- 交点问题
	- 找到链表的中点

2. 基本思路
3. 

### 边界收缩
1. 适用场景
	- 螺旋矩阵
	- 矩阵的旋转
	- 对角线遍历

2. 基本思路
	- 方向控制：比如使用四个循环分别处理四个方向的遍历
	- 边界更新：比如每完成一个方向的遍历就更新对应的边界
	- 条件判断：确保还有行/列没遍历
	- 循环停止：当 `top > bottom` 或 `left > right` 时，表示所有元素已遍历完毕

3. 例子
问题描述：
给你一个 m 行 n 列的矩阵 matrix ，请按照顺时针螺旋顺序，返回矩阵中的所有元素。

**示例 1：**

![](https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg)

输入：matrix = \[1,2,3\],\[4,5,6\],\[7,8,9\]  输出：\[1,2,3,6,9,8,7,4,5\]

题解：
```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
    int top = 0, left = 0;
    int right = matrix[0].length - 1, bottom = matrix.length - 1;

    List<Integer> result = new ArrayList<>();

    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; i++) {
            result.add(matrix[top][i]);
        }
        top++;

        for (int i = top; i <= bottom; i++) {
            result.add(matrix[i][right]);
        }
        right--;

        // 从右到左遍历下边
        if (top <= bottom) {
            for (int i = right; i >= left; i--) {
                result.add(matrix[bottom][i]);
            }
            bottom--;
        }

        // 从下到上遍历左边
        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                result.add(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
}
}
```

### 投票法
1. 适用场景
	- 统计多数元素

2. 基本思路
	- 维护一个 `element` 和 `count` 用来表示当前票数最多的元素，我把它称之为候选人。待处理元素依次排队处理，看到候选人还有票就给它投反对票。直到有 element 过来看到这个后续人的票数为 0 了，那就堂而皇之的自己当选为候选人，自己的票数为 1。循环往复...

问题描述：
给定一个大小为 `n` 的数组 `nums` ，返回其中的多数元素。多数元素是指在数组中出现次数 **大于** `⌊ n/2 ⌋` 的元素。你可以假设数组是非空的，并且给定的数组总是存在多数元素。

输入：nums = \[3,2,3\]  输出：3

**示例 2：**
输入：nums = \[2,2,1,1,1,2,2\]  输出：2
```java
public int majorityElement(int[] nums) {
        Integer count = 0;
        Integer element = 0;

        for (int num : nums) {
            // count == 0的时候意味着需要更新result了
            if (count == 0) {
                element = num;
            }

            if (num == result) {
                count++;
            } else {
                count--;
            }
        }
        return element;
    }
```

## 排序算法
### 冒泡排序
```java
public class OptimizedBubbleSort {
    public static void bubbleSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        
        // 记录最后一次交换的位置
        int lastExchangeIndex = 0;
        // 无序数列的边界，每次比较只需要比到这里为止
        int sortBorder = arr.length - 1;
        
        for (int i = 0; i < arr.length - 1; i++) {
            // 有序标记，每一轮的初始是true
            boolean isSorted = true;
            
            for (int j = 0; j < sortBorder; j++) {
                if (arr[j] > arr[j + 1]) {
                    // 交换
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    // 有元素交换，所以不是有序，标记变为false
                    isSorted = false;
                    // 更新最后交换的位置
                    lastExchangeIndex = j;
                }
            }
            // 更新无序数列的边界
            sortBorder = lastExchangeIndex;
            
            if (isSorted) {
                // 没有发生交换，数组已经有序，退出排序
                break;
            }
        }
    }

    // 测试代码
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("原始数组：");
        printArray(arr);
        
        bubbleSort(arr);
        
        System.out.println("排序后数组：");
        printArray(arr);
    }
    
    private static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
```

### 归并排序
```java
public class MergeSort {
    public static void mergeSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        int[] temp = new int[arr.length];    // 创建临时数组
        mergeSortHelp(arr, 0, arr.length - 1, temp);
    }
    
    private static void mergeSortHelp(int[] arr, int left, int right, int[] temp) {
        if (left < right) {
            int mid = left + (right - left) / 2;  // 防止整数溢出
            // 分别处理左右两边
            mergeSortHelp(arr, left, mid, temp);
            mergeSortHelp(arr, mid + 1, right, temp);
            // 合并两个有序数组
            merge(arr, left, mid, right, temp);
        }
    }
    
    private static void merge(int[] arr, int left, int mid, int right, int[] temp) {
        int i = left;        // 左边序列起点
        int j = mid + 1;     // 右边序列起点
        int t = 0;          // 临时数组指针
        
        // 比较两边的元素，谁小放谁
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[t++] = arr[i++];
            } else {
                temp[t++] = arr[j++];
            }
        }
        
        // 处理左边剩余元素
        while (i <= mid) {
            temp[t++] = arr[i++];
        }
        
        // 处理右边剩余元素
        while (j <= right) {
            temp[t++] = arr[j++];
        }
        
        // 将临时数组中的元素复制回原数组
        t = 0;
        int tempLeft = left;
        while (tempLeft <= right) {
            arr[tempLeft++] = temp[t++];
        }
    }

    // 测试代码
    public static void main(String[] args) {
        int[] arr = {8, 4, 5, 7, 1, 3, 6, 2};
        System.out.println("排序前：");
        printArray(arr);
        
        mergeSort(arr);
        
        System.out.println("排序后：");
        printArray(arr);
    }
    
    private static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
```


## 查找算法
### 二分查找-I
[二分查找-I\_牛客题霸\_牛客网](https://www.nowcoder.com/share/jump/6070107741740360799635)
```java
public class Solution {
    /**
     * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
     *
     *
     * @param nums int整型一维数组
     * @param target int整型
     * @return int整型
     */
    public int search (int[] nums, int target) {
        if (nums == null || nums.length < 1) {
            return -1 ;
        }

        int start = 0;
        int end = nums.length;
        int result = binSearch(target, start, end, nums);
        return result;
    }

	// 使用递归
    public int binSearch (int target, int start, int end, int[] arr) {
        if (start > end) {
            return -1;
        }

        int mid = start + (end - start) / 2; // 防止整数溢出的写法

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            // search in right part
            return binSearch(target, mid + 1, end, arr);
        } else {
            return binSearch(target, start, mid - 1, arr);
        }
    }
}
```
```java
// 使用循环
public int binSearch(int target, int start, int end, int[] arr) {
    while (start <= end) {
        int mid = start + (end - start) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
```




## 记忆化
>**记忆化**通过存储子问题的结果，避免了重复计算。
>如计算斐波那契额数列时

leetCode 070 计算爬楼梯
```java
public int climbStairs(int n) {
    int memo[] = new int[n + 1];
    return climbStairsN(n, memo);
}
private int climbStairsN(int n, int[] memo) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    int n1 = 0;
    //数组的默认值是 0
    if (memo[n - 1] == 0) {
        n1 = climbStairsN(n - 1, memo);
        memo[n - 1] = n1;
    } else {
        n1 = memo[n - 1];
    }
    int n2 = 0;
    if (memo[n - 2] == 0) {
        n2 = climbStairsN(n - 2, memo);
        memo[n - 2] = n2;

    } else {
        n2 = memo[n - 2];
    }
    return n1 + n2;
}
```


## 回溯法
>递归到最深处时，再回溯到上一层执行另一分支。
>如根据 n 计算出有效括号

## 递归法
### 合并两个有序链表
```java
public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null) {
            return list2;
        }

        if (list2 == null) {
            return list1;
        }

        if (list1.val < list2.val) {
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = mergeTwoLists(list1, list2.next);
            return list2;
        }
    }
```

## 动态规划
>动态规划（Dynamic programming，简称 DP）是一种在数学、计算机科学和经济学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。常常适用于有重叠子问题和最优子结构性质的问题，动态规划方法所耗时间往往远少于暴力解法。 简单来说，动态规划其实就是，给定一个问题，我们把它分解成若干个子问题，直到子问题可以直接求解，然后再逐步合并子问题的解，最终得到原问题的解。

leetCode 5
```java
class Solution {
    public String longestPalindrome(String s) {
        // 反转原始字符串
        String rev = new StringBuffer(s).reverse().toString();
        int n = s.length();

        // 动态规划数组，f[i][j] 存储 s[0...i] 和 rev[0...j] 的最长公共子串长度
        int[][] f = new int[n][n];

        // 记录最长回文子串的长度和起始位置
        int maxLen = 1;
        int begPos = 0;

        // 初始化第一列
        for (int j = 0; j < n; j++)
            if (rev.charAt(j) == s.charAt(0))
                f[0][j] = 1;

        // 动态规划填表
        for (int i = 1; i < n; i++) {
            // 初始化第一行
            f[i][0] = s.charAt(i) == rev.charAt(0) ? 1 : 0;

            for (int j = 1; j < n; j++) {
                // 如果字符匹配，则在之前的基础上加1
                if (s.charAt(i) == rev.charAt(j))
                    f[i][j] = f[i - 1][j - 1] + 1;

                // 更新最长回文子串的信息
                if (f[i][j] > maxLen) {
                    int befPos = n - j - 1;
                    // 检查回文子串是否与原字符串位置相对应
                    if (befPos + f[i][j] - 1 == i) {
                        maxLen = f[i][j];
                        begPos = befPos;
                    }
                }
            }
        }

        // 返回最长回文子串
        return s.substring(begPos, begPos + maxLen);
    }
}
```

## 贪心算法
>贪心算法。一种在每一步选择中都采取当前状态下最优的选择（即最“贪心”的选择），以期望最终结果是全局最优的算法。这就是贪心算法的思想。

leetCode 整数转罗马数组
```java
class Solution {
    public String intToRoman(int num) {
        // 定义两个数组，一个表示特定的罗马数字，一个表示对应的整数值
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] symbols = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};

        // 使用 StringBuilder 存储最终的罗马数字字符串
        StringBuilder sb = new StringBuilder();

        // 遍历整数值数组
        for (int i = 0; i < values.length && num > 0; i++) {
            // 当前数字还大于等于 values[i] 时，继续循环
            // 这意味着我们可以从 num 中减去 values[i]，并添加对应的罗马数字到结果中
            while (num >= values[i]) {
                num -= values[i]; // 从 num 中减去 values[i]
                sb.append(symbols[i]); // 添加对应的罗马数字到结果字符串
            }
        }

        // 将 StringBuilder 转换为字符串并返回
        return sb.toString();
    }
}
```

leetCode 跳跃游戏 II:

```java
    public int jump(int[] nums) {
        int len = nums.length;
		int end = 0;  // 上一次跳跃到的位置
		int maxPos = 0; // 最远可达位置
        int step = 0; // 跳跃步数

        for (int i = 0; i < len - 1; i++) {
            maxPos = Math.max(maxPos, i + nums[i]);
            if (i == end) {
                end = maxPos;
                step++;
            }
        }
        return step;
    }
```
以数组 `[2, 3, 1, 1, 4]` 为例：  
初始状态：  
end = 0, maxPosition = 0, steps = 0

i = 0：  
maxPosition = max(0, 0 + 2) = 2  
此时，i == end，说明需要跳跃。  
更新 end = 2，steps = 1  
贪心选择：从位置 0 跳到位置 2。  

i = 1：  
maxPosition = max(2, 1 + 3) = 4，`发现其实我能到达的最远位置是 4  `
i != end，继续遍历。  

i = 2：  
maxPosition = max(4, 2 + 1) = 4  
此时，i == end，说明需要跳跃。`我已经知道我最远能到 4 了，所以直接从这里跳到那个最远的位置`
更新 end = 4，steps = 2  
贪心选择：从位置 2 跳到位置 4。

i = 3：  
maxPosition = max(4, 3 + 1) = 4  
i != end，继续遍历。  
i = 4：  
已经到达终点，不需要再跳跃。  

i --> end 的过程，可以看作是完成实际跳跃的过程，当真的过来之后，才要判断是否进行下一次跳跃。

## 双指针
>使用双指针可以优化两层 for 循环。应用双指针技术来避免不必要的重复检查，并且帮助我们更快地缩小搜索范围。

使用场景
- 有序数组的情况(有序是使用双指针的前提）
- 

leetCode 11 盛最多水的容器
```java
class Solution {
    public int maxArea(int[] height) {
        int maxArea = 0; // 用于存储最大水容量
        int left = 0; // 初始化左指针
        int right = height.length - 1; // 初始化右指针

        while (left < right) {
            int currentArea = (right - left) * Math.min(height[left], height[right]); // 计算容量
            maxArea = Math.max(maxArea, currentArea); // 更新最大水容量

            if (height[left] < height[right]) {
                left++; // 如果左边较短，向右移动左指针
            } else {
                right--; // 如果右边较短，向左移动右指针
            }
        }

        return maxArea; // 返回最大水容量
    }
}
```


## 归并排序
>归并排序是建立在归并操作上的一种有效的排序算法，该算法是采用分治法（Divide and Conquer）的一个非常典型的应用，且各层分治递归可以同时进行。 归并排序思路简单，速度仅次于快速排序，为稳定排序算法，一般用于对总体无序，但是各子项相对有序的数列。 归并排序的核心思想是分治法，先递归分解数组，再合并数组。将数组分解最小之后，然后合并两个有序数组，基本思路是比较两个数组的最前面的数，谁小就先取谁，取了后相应的指针就往后移一位。然后再比较，直至一个数组为空，最后把另一个数组的剩余部分复制过来即可。

leetCode 88 归并排序的前置题目
leetCode 4 归并排序

## 字符串处理
### 反转字符串

```java
private String reverseString(String s) {
		char[] value = s.toCharArray();
		int n = value.length - 1;
		for (int j = (n-1) >> 1; j >= 0; j--) {
			int k = n - j;
			char cj = value[j];
			char ck = value[k];
			value[j] = ck;
			value[k] = cj;
		}
		return new String(value);
	}
```


