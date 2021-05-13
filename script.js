const MAXLENGTH = 256;

const App = {
    data() {
        return {
            message: '',
            isTooLong: false,
            isHex: true,
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
                if(this.isHex)
                    ret += (str[i] + '(0x' + str.charCodeAt(i).toString(16) + ')');
                else
                    ret += (str[i] + '(' + str.charCodeAt(i) + ')');
            }
            return ret;
        }
    }
}

Vue.createApp(App).mount('#app')