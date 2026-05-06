// ============ 导航栏交互功能 ============

// document.addEventListener('DOMContentLoaded', function() {
//     // 获取导航相关元素
//     const navToggleInput = document.getElementById('nav-toggle');
//     const header = document.querySelector('.header');
//     const dropdowns = document.querySelectorAll('.dropdown');
//     const navItems = document.querySelectorAll('.nav-title');

//     // ============ 移动版菜单展开/收起 ============
//     // 点击导航项时关闭菜单
//     navItems.forEach(item => {
//         item.addEventListener('click', function(e) {
//             // 移动版下拉菜单点击处理
//             if (this.classList.contains('dropdown-toggle')) {
//                 e.preventDefault();
//                 const dropdown = this.closest('.dropdown');
//                 dropdown.classList.toggle('active');
//             } else {
//                 // 非下拉菜单项，关闭菜单
//                 if (window.innerWidth <= 768) {
//                     navToggleInput.checked = false;
//                 }
//             }
//         });
//     });

//     // ============ 页面滚动时的导航栏效果 ============
//     // window.addEventListener('scroll', function() {
//     //     if (window.scrollY > 50) {
//     //         header.classList.add('scrolled');
//     //     } else {
//     //         header.classList.remove('scrolled');
//     //     }
//     // });

//     // ============ 点击页面其他区域时关闭菜单 ============
//     document.addEventListener('click', function(e) {
//         // 不是点击导航栏
//         if (!e.target.closest('.header')) {
//             navToggleInput.checked = false;
//             // 关闭所有下拉菜单
//             dropdowns.forEach(dropdown => {
//                 dropdown.classList.remove('active');
//             });
//         }
//     });

//     // ============ 窗口大小改变时的处理 ============
//     window.addEventListener('resize', function() {
//         if (window.innerWidth > 768) {
//             // 恢复桌面版状态
//             navToggleInput.checked = false;
//             dropdowns.forEach(dropdown => {
//                 dropdown.classList.remove('active');
//             });
//         }
//     });

//     // ============ 激活当前页面的导航项 ============
//     const currentUrl = window.location.pathname;
//     navItems.forEach(link => {
//         if (link.href && link.href.includes(currentUrl)) {
//             link.classList.add('active');
//         }
//     });
// });



// ============ 平滑滚动到锚点 ============
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         const href = this.getAttribute('href');
//         if (href !== '#' && document.querySelector(href)) {
//             e.preventDefault();
//             const target = document.querySelector(href);
//             const offsetTop = target.offsetTop - 70; // 减去导航栏高度
            
//             window.scrollTo({
//                 top: offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });


// 注册弹窗
const registerBtn = document.getElementById('registerBtn');
const registerContainer = document.getElementById("accountContainer")
const registerCloseBtn = document.getElementById('formClosebtn');

// 打开弹窗
registerBtn.onclick = () => {
    registerContainer.classList.add("show");
};

// 关闭弹窗
registerCloseBtn.onclick = () => {
    registerContainer.classList.remove('show');
};

// // 点击确定
// registerformBtn.onclick = () => {
//     const username = userName.value.trim();
//     const password = userPass.value.trim();
//     if (!username || !password) return;

//     setCookie(username,password,7);
//     registerContainer.classList.remove('show');
//     alert("注册成功！用户名：" + username);
// };