
            //부모 객체 만들고 -> 자식 객체 만들고 -> 각각 기능 추가하고 -> 자식들은 부모에 연결 ->  자식들 객체 선언 -> 원하는 값 출력
            
            //부모 객체 만듬
            function Parent_introduce(name) {
                this.name = name;
            
            }
            //부모 자기소개 기능
            Parent_introduce.prototype.name = null;
            Parent_introduce.prototype.introduce = function() {
                return "My Name Is " + this.name
            }
            //자식 객체만듬
            function Child_Birthday(name) {
                this.name = name;

            }
            //기능
            Child_Birthday.prototype = new Parent_introduce();
            Child_Birthday.prototype.birth = function() {
                return "My Brithday Is " + this.name;
            }

            //자식 객체만듬
            function Child_Age(name) {
                this.name = name;

            }
            //기능
            Child_Age.prototype = new Parent_introduce();
            Child_Age.prototype.Age = function() {
                return "My Age Is " + this.name;
            }


            var p1 = new Parent_introduce('noh seung hwan', '960101');
            var p2 = new Child_Birthday('960101');
            var p3 = new Child_Age('25');
            console.log(p1.introduce());
            console.log(p2.birth());
            console.log(p3.Age());
