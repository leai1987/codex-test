const projects = [
  {title:'Otherworld',category:'AI-ВИДЕО / WORLDBUILDING',description:'Визуальная история о путешествии в неизведанное. Приглушённая палитра, неземной ландшафт и маленький человек перед большим миром — исследование масштаба, тишины и воображения.'},
  {title:'Soft Matter',category:'ВИЗУАЛЬНАЯ КОНЦЕПЦИЯ / 3D AESTHETIC',description:'Исследование тактильности в цифровой среде. Скульптурные формы, тёплый свет и мягкие текстуры складываются в концепцию на границе предметного дизайна и абстрактного искусства.'},
  {title:'Bloom',category:'ЦИФРОВОЙ КОНТЕНТ / ART DIRECTION',description:'Встреча органики и технологий. Концепция цифрового цветка исследует природные ритмы, прохладные оттенки и новые формы визуального контента.'}
];
const projectDialog = document.querySelector('#project-dialog');
const contactDialog = document.querySelector('#contact-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
 const project = projects[Number(button.dataset.project)];
 document.querySelector('#dialog-title').textContent = project.title;
 document.querySelector('#dialog-category').textContent = project.category;
 document.querySelector('#dialog-description').textContent = project.description;
 projectDialog.showModal();
}));
document.querySelector('#contact-open').addEventListener('click', () => contactDialog.showModal());
document.querySelector('#discuss').addEventListener('click', () => {projectDialog.close(); contactDialog.showModal();});
document.querySelectorAll('dialog').forEach(dialog => {
 dialog.querySelector('.close').addEventListener('click', () => dialog.close());
 dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
 });
});
