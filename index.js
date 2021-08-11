export const watchscroll = {
    install: function(Vue) {
        var scroller = new Vue({
            data: {
                scrollY: 0,
                resize: 0,
            },
        });
        window.addEventListener("scroll", () => {
            scroller.scrollY = window.scrollY;
        });
        Vue.prototype.$windowY = scroller.$data;
    },
};

export const mousemove = {
    install: function(Vue) {
        var mousemove = new Vue({
            data: {
                mousey: 0,
                mousex: 0,
                timer: 0,
                time: 0,
            },
            created() {
                this.callInterval();
                document.addEventListener("mousemove", () => {
                    this.timer = 0;
                });
            },
            methods: {
                callInterval(time = 1000) {
                    return setInterval(() => {
                        this.timer += time;
                    }, time);
                },
            },
        });

        Vue.prototype.$mousemove = mousemove.$data;
    },
};

export const duplicate = {
    install: function(Vue) {
        Vue.prototype.$duplicate = (data) => {
            return JSON.parse(JSON.stringify(data));
        };
    },
};

export const returnmax = {
    install: function(Vue) {
        Vue.prototype.$returnmax = (array, field) => {
            return Math.max.apply(
                null,
                array.map((val) => {
                    return val[field];
                })
            );
        };
    },
};

export const orderarray = {
    install: function(Vue) {
        Vue.prototype.$orderarray = (array, field, order = "asc") => {
            if (order === "desc") {
                return array.sort((a, b) => {
                    return a[field] - b[field];
                });
            } else {
                return array.sort((a, b) => {
                    return b[field] - a[field];
                });
            }
        };
    },
};

export const pad = {
    install: function(Vue) {
        Vue.prototype.$pad = (val) => {
            var valString = val + "";
            if (valString.length < 2) {
                return "0" + valString;
            } else {
                return valString;
            }
        };
    },
};