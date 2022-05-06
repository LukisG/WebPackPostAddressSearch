const form = () => {
    return `
    <div class='form-group mb-2'>
        <input type='text' class='form-control term' placeholder='Enter your address'>

    </div>
    <div class='form-group mb-2'>
    <input type='text' class='form-control result' readonly>
    </div>
    <button class='btn btn-primary mb-2' type='submit'>Search</button>
    `
}

export default form;