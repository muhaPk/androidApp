const config = require('config')
const fs = require('fs')
const File = require('../models/File')


class FileController {

    async uploadFile(req, res) {

        try {

            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send('No files were uploaded.');
            }

            if (!req.body.host_id) {
                return res.status(400).send('No files were uploaded.');
            }

            const { file } = req.files
            const { host_id } = req.body

            const pathName = `${req.user.id}_${file.name}`
            const path = `${config.get('filePath')}/${pathName}`

            if (fs.existsSync(path)) {
                return res.status(400).json({message: 'File already exist'})
            }
            await file.mv(path)

            const type = file.name.split('.').pop()
            const dbFile = new File({
                name: file.name,
                belongs: 'groups',
                host_id,
                type,
                path: pathName,
                user: req.user.id,
                size: file.size,
            })

            await dbFile.save()

            res.json(dbFile)



        } catch (e) {
            console.log("uploadFile", e)
            return res.status(500).json({message: "Upload error"})
        }
    }

}

module.exports = new FileController()
