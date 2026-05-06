const toggleBtn = document.getElementById('toggleBtn');
const container = document.querySelector('.tag-container');
const tagList = document.getElementById('tagList');

toggleBtn.addEventListener('click', () => {
    container.classList.toggle('expanded');
    toggleBtn.textContent = container.classList.contains('expanded') ? '▲' : '▼';
});

// 如果标签少于等于9个，隐藏按钮
if (tagList.children.length <= 9) {
    toggleBtn.style.display = 'none';
}



// 添加标签弹窗
//
const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');
const inputBox = document.getElementById('inputBox');
const tagListContainer = document.getElementById('tagList');

// 打开弹窗
addBtn.onclick = () => {
    modal.classList.add('show');
    inputBox.focus();
};

// 关闭弹窗
cancelBtn.onclick = () => {
    modal.classList.remove('show');
    inputBox.value = '';
};

// 点击确定
confirmBtn.onclick = () => {
    const value = inputBox.value.trim();
    if (!value) return;

    const a = document.createElement('a');
    a.href = '#';
    a.textContent = value;

    tagListContainer.appendChild(a);

    modal.classList.remove('show');
    inputBox.value = '';
};


