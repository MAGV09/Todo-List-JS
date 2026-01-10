function createIcon(iconLink, iconTitle, iconPath) {
  const svg = document.createElementNS(iconLink, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');

  const title = document.createElementNS(iconLink, 'title');
  title.textContent = iconTitle;

  const path = document.createElementNS(iconLink, 'path');
  path.setAttribute('d', iconPath);

  svg.appendChild(title);
  svg.appendChild(path);

  return svg;
}

export default createIcon;
