const p_home = (req, res) => {
    //res.render('home');
    res.json({ msg: 'Hello World!'});
}

export {p_home};