window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                tech: ['Rajdhani', 'sans-serif']
            },
            colors: {
                bio: {
                    green: '#10b981',
                    emerald: '#059669',
                    cyan: '#06b6d4',
                    blue: '#0ea5e9',
                    dark: '#0f172a',
                    panel: '#1e293b'
                }
            },
            backgroundImage: {
                'tech-grid': 'linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)',
                'hex-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'100\' viewBox=\'0 0 60 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15L30 0zm0 100l25.98-15v-30L30 40 4.02 55v30L30 100z\' fill-rule=\'evenodd\' stroke=\'%2306b6d4\' stroke-width=\'0.5\' stroke-opacity=\'0.1\' fill=\'none\'/%3E%3C/svg%3E")',
                'agro-pattern': 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 3.33333L34.4338 11.6667V28.3333L20 36.6667L5.56624 28.3333V11.6667L20 3.33333ZM20 0L0 11.547V34.641L20 46.188L40 34.641V11.547L20 0Z\' fill=\'%2310b981\' fill-opacity=\'0.04\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
            },
            animation: {
                scanline: 'scan 8s linear infinite',
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite alternate',
                'float-tech': 'floatTech 4s ease-in-out infinite',
                'data-flow': 'dataFlow 20s linear infinite',
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards'
            },
            keyframes: {
                scan: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' }
                },
                pulseGlow: {
                    '0%': { boxShadow: '0 0 10px rgba(16,185,129,0.2), 0 0 20px rgba(16,185,129,0.1)' },
                    '100%': { boxShadow: '0 0 20px rgba(6,182,212,0.4), 0 0 40px rgba(6,182,212,0.2)' }
                },
                floatTech: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' }
                },
                dataFlow: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '100% 100%' }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            }
        }
    }
};
