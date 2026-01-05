(function () {
    var toggle = document.getElementById('theme-toggle');
    var root = document.documentElement;

    function updateToggleText() {
        var isDark = root.classList.contains('dark') ||
            (!root.classList.contains('light') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        toggle.innerHTML = isDark
            ? 'turn on the lights'
            : 'turn off the lights';
    }

    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        var isDark = root.classList.contains('dark') ||
            (!root.classList.contains('light') && window.matchMedia('(prefers-color-scheme: dark)').matches);

        root.classList.remove('dark', 'light');
        var newTheme = isDark ? 'light' : 'dark';
        root.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleText();
    });

    updateToggleText();
})();
