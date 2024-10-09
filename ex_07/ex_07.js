new Vue({
    el: '#app',
    data() {
        return {
            chuckImage: 'pony2.jpg',
            imageStyle: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)', 
                transition: 'top 0.2s, left 0.2s', 
    },
    };
    },
    methods: {
        teleportImage(event) {
            const offset = 100;
            this.imageStyle.left = `${Math.max(0, event.clientX + offset + Math.random() * offset)}px`;
            this.imageStyle.top = `${Math.max(0, event.clientY + offset + Math.random() * offset)}px`;
        },
       },
      });
