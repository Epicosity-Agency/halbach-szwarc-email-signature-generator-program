document.getElementById('signatureForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const address = document.getElementById('address').value;
    const directNumber = document.getElementById('directNumber').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const emailAddress = document.getElementById('emailAddress').value;

    const officeNumber = "(605) 910-7645"; // Static office number
    const logoSrc = "data:image/png;base64,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"; // Static image base64
    const addressIconSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAACXBIWXMAAAsSAAALEgHS3X78AAAAe0lEQVQImU2LQRHCQBAE+9YAGNhK4SAogOfJIA7iACIBB+CA337BARpOQRCwtXmwKZhfT88UN+2BB9DxzSC13YqbzsAGeAGHlDtZS6ntCEwp+uKmkTABYw73AtxTnP/eb8nVh18uACK1zcApy6vU9gQgIogI3HR00+3KCwjkKsTn5uywAAAAAElFTkSuQmCC"; // Static image base64
    const phoneIconSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHCAYAAAArkDztAAAACXBIWXMAAAsSAAALEgHS3X78AAAAaklEQVQImV3NsQ3CUBRD0fMzQRZIYAPYAEpKRmGUjAAb/C4pWYENgAlYIHk0TyjCjWVd2S7z2N3R4tic3h+pBgfscLZSk/5C/Qc3bLBdgzKPXYtn5iG9loiwTP0e1/yCR4mIX32Z+ktO1i84dRjqtxuLngAAAABJRU5ErkJggg=="; // Static image base64
    const emailIconSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAACXBIWXMAAAsSAAALEgHS3X78AAAAdklEQVQImX3MPQ2DUBiF4YebCsAAaEACIzKQcCUgoXWAhG4wIqF1QFCAAWiXr0m79F1Ocv6KY6peeOLulxI9lgtuYZSp2zKcc93giow+YU/d1kf4OOc6Y8GQum2EFGFGG0uhQzwqjqnasX4VPjThrcUxVa3/rG9QxCQYwqDFYgAAAABJRU5ErkJggg=="; // Static image base64
    const websiteIconSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAACXBIWXMAAAsSAAALEgHS3X78AAAAfElEQVQImU3OMRHCQBSE4e9uEICBMHEAElKmjAQkxAGREAlIoAtlJICDmygAASEUvIKd2Wrn3920bZvP/TDggrefhtwuY1qnakCHghfq8JhxwjkCKLldajRpnaqCOYIaezzQ5CCGqJ3DPcoO1z+yxEyHPsXbPnaPeMbb2xecCyg1XQ/BvQAAAABJRU5ErkJggg=="; // Static image base64

    const signatureHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Signature</title>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { width: 100%; max-width: 600px; }
            .logo { max-width: 2in; height: auto; }
            .separator { width: 2px; background-color: #1f2d3d; }
            .text { padding-left: 10px; }
            .icon { vertical-align: middle; margin-right: 5px; }
        </style>
    </head>
    <body>
        <table cellpadding="0" cellspacing="0" border="0" class="container">
            <tr>
                <td align="center" style="width: 2in;">
                    <img src="${logoSrc}" alt="Logo" class="logo" style="display: block; max-width: 100%; height: auto;">
                </td>
                <td width="2" class="separator" style="background-color: #1f2d3d;"></td>
                <td class="text" style="padding-left: 10px;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                            <td style="font-size: 16px; color: #1F2D3D;">
                                <strong>${name}</strong> | ${title}
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 14px; color: #1f2d3d;">
                                <img src="${addressIconSrc}" alt="Address" width="6" height="7" class="icon">
                                ${address}
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 14px; color: #1f2d3d;">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                        <td><span style="color: #F0B323;">office:</span></td>
                                        <td>&nbsp;${officeNumber}</td>
                                    </tr>
                                    <tr>
                                        <td><span style="color: #F0B323;">direct:</span></td>
                                        <td>&nbsp;${directNumber}</td>
                                    </tr>
                                    <tr>
                                        <td><span style="color: #F0B323;">cell:</span></td>
                                        <td>&nbsp;${mobileNumber}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 14px; color: #1f2d3d;">
                                <img src="${emailIconSrc}" alt="Email" width="6" height="7" class="icon">
                                <a href="mailto:${emailAddress}" style="color: #1f2d3d; text-decoration: none;">${emailAddress}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 14px; color: #1f2d3d;">
                                <img src="${websiteIconSrc}" alt="Website" width="6" height="7" class="icon">
                                <a href="http://halbachlawfirm.com" style="color: #1f2d3d; text-decoration: none;">halbachlawfirm.com</a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;

    const blob = new Blob([signatureHtml], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${name}-signature.html`;
    link.click();
});