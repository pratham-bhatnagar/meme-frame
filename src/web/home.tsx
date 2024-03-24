//@ts-ignore
export const Home = () => {
  return (
    <html>
   <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Shit Coins - Buy Your Meme Coin Now!</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-image: url('https://i.pinimg.com/564x/db/fc/7f/dbfc7fa76c0521302f980254eb4b0265.jpg'); background-size: contain;">
    <div style="max-width: 800px; margin: 20px auto; padding: 20px; background-color: rgba(255, 255, 255, 0.8); border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); color: #333; text-align: center;">
        <h1 style="color: #007bff;">Shit Coins - Buy Your Meme Coin Now!</h1>
        <div class="advertise" style="margin-top: 20px;">
            <p style="font-size: 18px; color: #333;">Advertise your meme coin here!</p>


          
            <select name="option" id="option" style="padding: 10px; margin: 10px; border: none; border-radius: 5px; font-size: 16px; background-color: #007bff; color: #fff;">
                <option value="base">Base</option>
                <option value="optimism">Optimism</option>
            </select>
            <input type="text" name="contractAddress" id="contractAddress" placeholder="Contract Address" style="padding: 10px; margin: 10px; border: none; border-radius: 5px; font-size: 16px; background-color: #333; color: #fff;"/>
            <input type="submit" value="Submit" style="background-color: #007bff; color: #fff; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px; font-size: 16px;"/>
     


        </div>
    </div>
</body>


    </html>
  );
};
