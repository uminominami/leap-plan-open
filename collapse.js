function toggleCollapse(id) {  
  var container = document.getElementById(id);  
  if (container.classList.contains('collapsed')) {  
    // 展开  
    container.classList.remove('collapsed');  
    var newHeight = container.scrollHeight; // 获取内容的高度  
    container.style.height = '0px'; // 初始高度为0，为了触发动画  
    setTimeout(function() {  
      container.style.height = newHeight + 'px'; // 设置新高度  
      // 可以在动画结束后移除高度样式，使其回到自动高度状态  
      setTimeout(function() {  
        container.style.height = 'auto';  
      }, 300); // 与 CSS 中的 transition 时间相匹配  
    }, 10); // 允许浏览器渲染变化  
  } else {  
    // 折叠  
    container.classList.add('collapsing'); // 防止内容溢出  
    var currentHeight = container.scrollHeight; // 获取当前高度  
    container.style.height = currentHeight + 'px'; // 设置当前高度为固定值，以便动画  
    setTimeout(function() {  
      container.classList.add('collapsed'); // 触发折叠动画  
      container.style.height = '0px'; // 最终高度为0  
      // 动画结束后移除 collapsing 类  
      setTimeout(function() {  
        container.classList.remove('collapsing');  
      }, 300); // 与 CSS 中的 transition 时间相匹配  
    }, 10); // 允许浏览器渲染变化  
  }  
}


function verifyCode() {  
  const codeInput = document.getElementById('code-input').value;  
  const linkContainer = document.getElementById('link-container');  
    
  if (codeInput === 'BNUchem') {  
      linkContainer.style.display = 'block';  
  } else {  
      linkContainer.style.display = 'none';  
      alert('Incorrect code. Please try again.');  
  }  
}


let rightClickCount = 0;  
const inputGroup = document.querySelector('.input-group');  
const linkContainer = document.getElementById('link-container');  
  
document.addEventListener('contextmenu', (event) => {  
    //event.preventDefault(); // 阻止默认的右键菜单  
    rightClickCount++;  
  
    if (rightClickCount === 4) {  
        inputGroup.style.display = 'block';  
        // linkContainer.style.display = 'block';  
        // 重置计数器  
        rightClickCount = 0;  
    }  
    // 可以在这里设置一个计时器，如果在一定时间内没有达到三次右键点击，则重置计数器  
    setTimeout(() => {  
        rightClickCount = 0;  
    }, 1000); // 例如2秒内需要完成三次右键点击  
});  
  
