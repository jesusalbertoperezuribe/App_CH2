const modules = ['inicio', 'configuraciones', 'herramientas', 'notificaciones', 'usuarios'];
const navColors = {
    inicio: 'text-bio-cyan',
    configuraciones: 'text-bio-green',
    herramientas: 'text-bio-cyan',
    notificaciones: 'text-yellow-500',
    usuarios: 'text-purple-400'
};

let oratorActive = false;

function initializeApp() {
    const splashScreen = document.getElementById('splash-screen');
    const appContainer = document.getElementById('app-container');

    setTimeout(() => {
        splashScreen.classList.add('opacity-0');

        setTimeout(() => {
            splashScreen.classList.add('hidden');
            appContainer.classList.remove('hidden');

            setTimeout(() => {
                appContainer.classList.remove('opacity-0');
                setActiveNav('inicio');
                drawTechRoots();
            }, 100);
        }, 1000);
    }, 3000);
}

function showModule(targetModule) {
    modules.forEach((moduleName) => {
        const moduleElement = document.getElementById(`module-${moduleName}`);
        if (!moduleElement) {
            return;
        }

        moduleElement.classList.add('hidden');
        moduleElement.classList.remove('animate-fade-in-up');
    });

    const targetElement = document.getElementById(`module-${targetModule}`);
    if (targetElement) {
        targetElement.classList.remove('hidden');
        void targetElement.offsetWidth;
        targetElement.classList.add('animate-fade-in-up');
    }

    setActiveNav(targetModule);

    if (targetModule === 'notificaciones') {
        document.getElementById('notif-badge')?.classList.add('hidden');
    }
}

function setActiveNav(targetModule) {
    document.querySelectorAll('.nav-btn').forEach((button) => {
        const buttonTarget = button.dataset.target;
        const icon = button.querySelector('i');

        button.classList.remove(navColors[buttonTarget] || 'text-bio-cyan');

        if (buttonTarget !== 'inicio') {
            button.classList.add('text-slate-500');
            icon?.classList.replace('ph-fill', 'ph-duotone');
        }

        if (buttonTarget === targetModule) {
            if (buttonTarget !== 'inicio') {
                button.classList.remove('text-slate-500');
                button.classList.add(navColors[buttonTarget]);
                icon?.classList.replace('ph-duotone', 'ph-fill');
            } else {
                button.classList.add('text-bio-cyan', 'shadow-[0_0_20px_rgba(6,182,212,0.8)]');
            }
        } else if (buttonTarget === 'inicio') {
            button.classList.remove('shadow-[0_0_20px_rgba(6,182,212,0.8)]');
        }
    });
}

function toggleOratorMode() {
    oratorActive = !oratorActive;

    const card = document.getElementById('orator-card');
    const button = document.getElementById('btn-orator');

    card.classList.toggle('overdrive-active', oratorActive);

    if (oratorActive) {
        button.className = 'w-full py-3 rounded-lg border border-red-500 bg-red-500/20 text-red-400 font-tech font-bold tracking-wider hover:bg-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all flex items-center justify-center gap-2';
        button.innerHTML = '<i class="ph-fill ph-warning-circle animate-pulse"></i><span>SOBRECARGA ACTIVA</span>';
        return;
    }

    button.className = 'w-full py-3 rounded-lg border border-bio-cyan/50 bg-bio-cyan/10 text-bio-cyan font-tech font-bold tracking-wider hover:bg-bio-cyan/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2';
    button.innerHTML = '<i class="ph-bold ph-power"></i><span>INICIAR SECUENCIA</span>';
}

function clearNotifications() {
    const list = document.getElementById('notifications-list');
    if (!list) {
        return;
    }

    list.innerHTML = `
        <div class="glass-panel p-6 rounded-xl text-center border-dashed border-2 border-slate-700 animate-fade-in-up mt-10">
            <i class="ph-duotone ph-check-circle text-4xl text-slate-500 mb-2"></i>
            <p class="font-tech text-slate-400 tracking-widest uppercase text-sm">Registro Purgado</p>
            <p class="text-[10px] font-mono text-slate-500 mt-1">Flujo operativo restaurado al 100%</p>
        </div>
    `;
}

function drawTechRoots() {
    const container = document.getElementById('tech-roots-container');
    if (!container) {
        return;
    }

    const colors = ['#10b981', '#06b6d4', '#ffffff', '#a855f7'];

    for (let index = 0; index < 20; index += 1) {
        const line = document.createElement('div');
        const isVertical = Math.random() > 0.5;
        const length = 50 + Math.random() * 150;
        const color = colors[Math.floor(Math.random() * colors.length)];

        line.style.position = 'absolute';
        line.style.top = `${Math.random() * 100}%`;
        line.style.left = `${Math.random() * 100}%`;
        line.style.background = `linear-gradient(${isVertical ? '180deg' : '90deg'}, transparent, ${color}80, transparent)`;
        line.style.boxShadow = `0 0 10px ${color}40`;
        line.style.opacity = Math.random() * 0.5 + 0.1;

        if (isVertical) {
            line.style.width = '1px';
            line.style.height = `${length}px`;
        } else {
            line.style.height = '1px';
            line.style.width = `${length}px`;
        }

        if (Math.random() > 0.5) {
            const node = document.createElement('div');
            node.style.width = '4px';
            node.style.height = '4px';
            node.style.borderRadius = '50%';
            node.style.backgroundColor = color;
            node.style.boxShadow = `0 0 8px ${color}`;
            node.style.position = 'absolute';
            node.style.left = isVertical ? '-1.5px' : '50%';
            node.style.top = isVertical ? '50%' : '-1.5px';
            line.appendChild(node);
        }

        container.appendChild(line);
    }
}

function registerEventListeners() {
    document.querySelectorAll('[data-module]').forEach((button) => {
        button.addEventListener('click', () => showModule(button.dataset.module));
    });

    document.getElementById('btn-orator')?.addEventListener('click', toggleOratorMode);
}

document.addEventListener('DOMContentLoaded', () => {
    registerEventListeners();
    initializeApp();
});
