const MAXLENGTH = 256;

const App = {
    data() {
        return {
            message: '',
            isTooLong: false,
        }
    },
    computed: {
        codedString() {
            return this.getCodedString(this.message);
        }
    },
    methods: {
        getCodedString(str) {
            let ret = ''
            for (let i = 0; i < str.length; i++) {
                ret += (str[i] + '(0x' + str.charCodeAt(i).toString(16) + ')')
            }
            return ret;
        }
    }
}

Vue.createApp(App).mount('#app')