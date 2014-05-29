CLIENT_ID = "494745400143-ggt69ru9s24joh3ihik4psu91o74nlra.apps.googleusercontent.com"
STATE = SecureRandom.hex
get '/' do
  erb :index
end

get '/google_login' do
  google_url = "https://accounts.google.com/o/oauth2/auth" +
                    "response_type=token&"+
                    "client_id=#{CLIENT_ID}&"+
                    "redirect_uri=http://hidden-reaches-5049.herokuapp.com/logged_in&"+
                    "scope=profile&"+
                    "state=#{STATE}&" 
  redirect google_url
end

