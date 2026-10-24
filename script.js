const projects = {
 film: {title:'Там, где тихо',category:'AI FILM / MEMORY CINEMA',description:'Концепция короткого фильма о моменте, когда можно перестать спешить. Пустой берег, ветер, движение воды и один человек перед горизонтом. В основе — сдержанная камера, естественный свет и ощущение присутствия. Представлена визуальная концепция; готовое видео пока не опубликовано.'},
 portrait: {title:'Ближе к свету',category:'AI-ФОТОГРАФИЯ / PORTRAIT STUDY',description:'Портретная AI-концепция о тихом внимании к себе. Боковой свет из окна, естественная текстура и минимум постановки. Исследование того, как один кадр передаёт настроение без слов.'},
 morning: {title:'Медленное утро',category:'AI-ФОТОГРАФИЯ / STILL LIFE',description:'Визуальная AI-концепция о красоте обычного утра. Лёгкая занавеска, тень дерева и солнечный свет на стене. Направление для атмосферного контента, в котором важны воздух, фактура и простые детали.'}
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
 const project = projects[button.dataset.project];
 document.querySelector('#dialog-title').textContent = project.title;
 document.querySelector('#dialog-category').textContent = project.category;
 document.querySelector('#dialog-description').textContent = project.description;
 dialog.showModal();
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.querySelector('.dialog-link').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
 const rect = dialog.getBoundingClientRect();
 if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Открыть меню');navigation.classList.remove('open');}
menu.addEventListener('click', () => {
 const expanded = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(expanded));
 menu.setAttribute('aria-label',expanded?'Закрыть меню':'Открыть меню');
 navigation.classList.toggle('open', expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {if(event.key === 'Escape') closeMenu();});
