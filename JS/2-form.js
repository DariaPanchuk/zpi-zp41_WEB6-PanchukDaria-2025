const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".form-input"),
    textarea: document.querySelector(".form-text"),
}

const STORAGE_KEY = "feedback-form-state";

let formData = { email: "", message: "" };

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
    formData = JSON.parse(savedData);
    refs.input.value = formData.email || "";
    refs.textarea.value = formData.message || "";
}

const saveToLocalStorage = (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

refs.form.addEventListener("input", saveToLocalStorage);

refs.form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };

    refs.form.reset();
});