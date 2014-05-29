CLIENT_ID = "494745400143-ggt69ru9s24joh3ihik4psu91o74nlra.apps.googleusercontent.com"
CLIENT_SECRET = "7-8xV3iGpxeFnio-mEX7Y6B4"
STATE = SecureRandom.hex


get '/' do
  erb :index
end

get '/google_login' do
  google_url = "https://accounts.google.com/o/oauth2/auth?" +
                    "response_type=code&"+
                    "client_id=#{CLIENT_ID}&"+
                    "redirect_uri=http://hidden-reaches-5049.herokuapp.com/logged_in&"+
                    "scope=profile&"+
                    "state=#{STATE}&" 
  redirect google_url
end

get '/logged_in' do
  access_code = params[:code]
  access_code
  # first_response = HTTParty.post("https://accounts.google.com/o/oauth2/token?", {body: {client_id: CLIENT_ID, client_secret: CLIENT_SECRET, redirect: "http://hidden-reaches-5049.herokuapp.com/logged_in", grant_type:"authorization_code"}})
  # access_token = first_response["access_token"]
  # access_token
end
