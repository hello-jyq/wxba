export default {
    methods: {
        onEyeClick(e){
            let el = e.target;
            let Input= el.previousElementSibling || el.nextElementSibling;
            let type = Input.getAttribute("type");
            if (type == "password") {
                Input.setAttribute("type",'text');
                el.classList.add("on");
            }
            else {
                Input.setAttribute("type",'password');
                el.classList.remove("on");
            }

        },
    }
  }