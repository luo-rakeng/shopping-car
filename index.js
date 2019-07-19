new Vue ({
    el: "#app",
    data: {
        list: [
            {
                id: 1,
                name: "iPhone7",
                price: 6188,
                count: 1,
                choose: '否'
            },
            {
                id: 2,
                name: "iPad Pro",
                price: 5888,
                count: 1,
                choose: '否'
            },
            {
                id: 3,
                name: "MacBook Pro",
                price: 21488,
                count: 1,
                choose: '否'
            }  
        ],
    },
    computed: {
        totalPrice: function() {
            var total = 0; 
            var count1;
            for(var i = 0;i < this.list.length; i++) {
                var item = this.list[i];
                if(item.choose=="否"){
                    count1 = 0;
                } else count1 = item.count; 
                total += item.price*count1;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    // methods 来替代 computed,效果上两个都是一样的,但是 computed 是基于它的依赖缓存,只有相关依赖发生改变时才会重新取值.而使用 methods,在重新渲染的时候,函数总会重新调用执行
    methods: {
        handleReduce: function(index) {
            if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function(index) {
            this.list[index].count++;
        },
        handleRemove: function(index) {
            this.list.splice(index,1);
        },
        handleRight: function(index) {
            if(this.list[index].choose=="否") {
                this.list[index].choose="是";
            } else this.list[index].choose="否" ;

            var count = 0;
            var input = document.getElementsByTagName("input")[0];
            for(var i = 0;i < this.list.length; i++) {              
                if(this.list[i].choose === "是") {
                    count++;
                }  
            }
            if(count === this.list.length) {
                input.checked = true;
            }  else {
                input.checked = false;
            }
        },
        handleChoose: function() {
            var count = 0;
            var input = document.getElementsByTagName("input")[0];
            var boonl = false;
            for(var i = 0;i < this.list.length; i++) {              
                if(this.list[i].choose === "是") {
                    count++;
                }      
                if(this.list[i].choose=="否") {
                    this.list[i].choose="是";
                }
            } 
            if(count === this.list.length) {            
                input.checked = true;
                boonl = true;
            } 
            if(boonl) {
                input.checked = false;
                boonl = false;
                for(var i = 0;i < this.list.length; i++) {              
                    this.list[i].choose="否";
                } 
            }
        }
    }
})