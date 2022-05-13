let operator = document.querySelectorAll(".operator");
let number = document.querySelectorAll(".number");

// get history from html

    function get_history()
    {
        let history = document.querySelector("#history_value");
        return history.innerText;
    }

// set history to html
    function set_history(data)
    {
        let history = document.querySelector("#history_value");
        history.innerText = data;
    }

    // get output from html

    function get_output()
    {
        let output = document.querySelector("#output_value");
        return output.innerText;
    }

// set output to html
    function set_output(data)
    {
        let output = document.querySelector("#output_value");
        output.innerText = data;
    }


