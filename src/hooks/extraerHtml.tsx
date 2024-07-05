export const stripHtml = (html: string | undefined): string => {
    const elementoTemporal = document.createElement('div');
    if (!html) return '';
    elementoTemporal.innerHTML = html;
    return elementoTemporal.innerText;
  };