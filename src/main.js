const versions = [
  '1.0.0',
  'bsp',
];

const versionLocalStorageKey = 'version';

const root = document.getElementById('root');

function main() {
  const savedVersion = localStorage.getItem(versionLocalStorageKey);

  if (versions.includes(savedVersion)) {
    showLastUsedVersion(savedVersion);
  } else {
    showVersionsList();
  }
}

function switchToVersion(version) {
  window.location.href = `./${version}?v=${Date.now()}`;
}

function handleVersionClick(version) {
  localStorage.setItem(versionLocalStorageKey, version);
  switchToVersion(version);
}

function showVersionsList(lastUsedVersion) {
  root.innerHTML = `
<div class="versions-list">
  <div style="font-size: 24px; line-height: 40px;">Select a version</div>
  ${lastUsedVersion ? (`<div class="version-item" onclick="handleVersionClick('${lastUsedVersion}');">${lastUsedVersion} (last used)</div>`) : ''}
  ${versions.map((version) => `<div class="version-item" onclick="handleVersionClick('${version}');">${version}</div>`).join('')}
</div>`;
}

function showLastUsedVersion(version) {
  root.innerHTML = `
<div class="versions-list">
  <div style="font-size: 24px; line-height: 40px;">Last used version</div>
  <div class="version-item" onclick="handleVersionClick('${version}');">${version}</div>
  <div class="version-item" onclick="showVersionsList('${version}')">Show other versions</div>
</div>`;
}

main();
