// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// nums = [-2,0,1,1,2];
// nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
nums = [1, -1, -1, 0];

// 三重循环
// function threeSum(nums) {
//   nums.sort((a, b) => a - b);
//   console.log(nums);
//   list = []
//   for (let i = 0; i < nums.length; i++) {
//     if(i>0 && nums[i-1] === nums[i]) {
//       continue
//     }
//     for (let j = i+1; j < nums.length; j++) {
//       // if(nums[j-1] === nums[j]) {
//       //   continue
//       // }
//       for (let z = j+1; z < nums.length; z++) {
//         // if(nums[z-1] === nums[z]) {
//         //   continue
//         // }
//         if(nums[i] + nums[j] + nums[z] === 0) {
//           list.push([nums[i], nums[j], nums[z]])
//         }
//         while (nums[z] === nums[z+1]) {
//           z = z + 1
//         }
//         // if (nums[z] === nums[z+1]) {
//         //   z = z + 1
//         // }
//       }
//       while (nums[j]===nums[j+1]) {
//         j = j + 1
//       }
//       // if (nums[j] === nums[j+1]) {
//       //   j = j + 1
//       // }
//     }
//   }
//   return list;
// }

// 双指针
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  list = [];
  for (let i = 0; i < nums.length; i++) {
    x = i + 1;
    y = nums.length - 1;
    while (x < y) {
      if (nums[i] + nums[x] + nums[y] > 0) {
        while (nums[y] === nums[y - 1]) {
          y = y - 1;
        }
        y = y - 1;
      } else if (nums[i] + nums[x] + nums[y] < 0) {
        while (nums[x] === nums[x + 1]) {
          x = x + 1;
        }
        x = x + 1;
      } else {
        list.push([nums[i], nums[x], nums[y]]);
        while (nums[x] === nums[x + 1]) {
          x = x + 1;
        }
        x = x + 1;
      }
    }
    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return list;
}

console.log(threeSum(nums));
