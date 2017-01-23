var path = require('path'),
    express = require('express'),
    fs = require('fs'),
    app = express();

app.disable('x-powered-by');
app.all('/uploads', function (req, res) {
    var folder = './public/uploads',
        html = '<html><body>##files##</body></html>';

    fs.readdir(folder, (err, files) => {
        var fileHrefs = '';

        files.forEach(function (file) {
            fileHrefs += '<a href="http://localhost:3000/uploads/' + file + '">' + file + '</a>';
        });

        html = html.replace('##files##', fileHrefs);

        res.send(err || html);
    })
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);