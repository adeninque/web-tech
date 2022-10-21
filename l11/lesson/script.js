document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom content loaded');
    const msg = 'mozilla';
    console.log(msg.includes('zilla'));
    console.log(msg.startsWith('moz'));
    console.log(msg.endsWith('illa'));
    console.log(msg.indexOf('zilla'));
    console.log(msg.slice(1, 3));
    console.log(msg.toLowerCase());
    console.log(msg.toUpperCase());
});