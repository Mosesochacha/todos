class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from StandardError, with: :standard_error

    def app_response(message: 'success', status: 200, data: nil)
        render json: {
            message: message,
            data: data
        }, status: status
    end

    #hash token
    def encode(uid, email)
        payload = {
          data: {
            uid: uid, 
            email: email
          },
          exp: Time.now.to_i + (6*3000)
        }
        begin
          JWT.encode(payload, ENV['task_train_key'], 'H5256')
        rescue JWT::EncodeError => er
          app_response(message: 'failed', status: 400, data: { info: 'Something went wrong' }) 
        end
      end
      

      def verfy_auth
           auth_headers = request.headers['Authorization']
           if !auth_headers
            app_response(message: 'failed', status: 401, data: { info: 'Request not authorized' })
           else 
            token = auth_headers.split('')[1]
           render json: {
            data: decode(token)[0]["data"]
           }
        end
           
      end

      #unhash token
def decode(token)
    begin
        JWT.encode(payload, ENV['task_train_key'] ,true , {algorithm:'H5256'})

    rescue JWT::DecodeError => e
        app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' })
    end
    
end


    # store user id in session
    def save_user(id)
        session[:uid] = id
        session[:expiry] = 6.hours.from_now
    end

    # delete user id in session
    def remove_user
        session.delete(:uid)
        session[:expiry] = Time.now
    end

    # check for session expiry
    def session_expired?
        session[:expiry] ||= Time.now
        time_diff = (Time.parse(session[:expiry]) - Time.now).to_i
        unless time_diff > 0
            app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' })
        end
    end

    # get logged in user
    def user
        User.find(session[:uid].to_i) 
    end

    # rescue all common errors
    def standard_error(exception)
        app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
    end

end
