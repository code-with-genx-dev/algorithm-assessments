function calculate() {
  const input = document.getElementById("input").value;
  const arr = input.split(",").map(Number);

  const n = arr.length;
  const leftMax = new Array(n);
  const rightMax = new Array(n);

  leftMax[0] = arr[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
  }

  rightMax[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
  }

  let water = 0;
  const waterArr = [];

  for (let i = 0; i < n; i++) {
    const w = Math.min(leftMax[i], rightMax[i]) - arr[i];
    waterArr.push(w > 0 ? w : 0);
    water += w > 0 ? w : 0;
  }

  document.getElementById("result").innerText = `Water: ${water} units`;

  render(arr, waterArr);
}

function render(arr, waterArr) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  const maxHeight = Math.max(...arr, ...waterArr.map((w, i) => w + arr[i]));

  for (let i = 0; i < arr.length; i++) {
    const col = document.createElement("div");
    col.className = "column";

    const totalHeight = arr[i] + waterArr[i];

    for (let j = 0; j < maxHeight; j++) {
      const block = document.createElement("div");
      block.className = "block";

      if (j < arr[i]) {
        block.classList.add("wall");
      } else if (j < totalHeight) {
        block.classList.add("water");
      }

      block.style.height = "20px";
      col.appendChild(block);
    }

    grid.appendChild(col);
  }
}

calculate();