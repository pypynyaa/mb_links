const shareButton = document.querySelector('.share-button');
const dialog = document.querySelector('.share-dialog');
const shareInput = document.querySelector('.share-url');
const status = document.querySelector('.share-status');
// Share the public canonical address, including in local previews.
const shareUrl = 'https://mblinks.online/';
let statusTimeout;

function showStatus(message) {
  status.textContent = message;
  clearTimeout(statusTimeout);
  statusTimeout = setTimeout(() => { status.textContent = ''; }, 3500);
}

shareButton?.addEventListener('click', () => {
  shareInput.value = shareUrl;
  dialog.showModal();
});

document.querySelector('.copy-button')?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(shareUrl);
    dialog.close();
    showStatus('Ссылка скопирована');
  } catch {
    shareInput.focus();
    shareInput.select();
    showStatus('Скопируйте выделенную ссылку');
  }
});
