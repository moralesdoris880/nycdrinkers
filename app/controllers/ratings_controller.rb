class RatingsController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        user = User.find_by(id:session[:user_id])
        if user
            render json: Rating.all,include: [:user,:drink], status: :created
        else
            render json: {errors: ['Not found']}, status: :unauthorized
        end
    end

    def user_ratings
        user = User.find_by(id:session[:user_id])
        if user
            render json: user.ratings,include: [:drink], status: :accepted
        else
            render json: {errors: ['Not found']}, status: :unauthorized
        end
    end

    def create
        current_user = User.find_by(id:session[:user_id])
        if current_user
            rating = current_user.ratings.create!(rating_params)
            render json: rating
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    def update
        user =  User.find_by(id: session[:user_id])
        rating = user.ratings.find_by(id: params[:id])
        if rating
            rating.update(rating_params)
            render json: rating,include: [:drink], status: :accepted
        else
            render json: {error: 'Not Found'}, status: :not_found
        end
    end

    def destroy
        user =  User.find_by(id: session[:user_id])
        rating = user.ratings.find_by(id: params[:id])
        if rating
            rating.destroy
            render json: {}
        else
            render json: {error: 'Not Found'}, status: :not_found
        end
    end

    def drinks3
        ratings = Rating.drinks3 #Class v Instance Method , debugging 
        byebug
        if ratings
            render json: ratings
        else
            render json: {error: 'Not Found'}, status: :not_found
        end
    end


    private

    def rating_params
        params.permit(:comment,:drink_rating,:drink_id) 
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: ["Incorrect"]}, status: :unprocessable_entity
    end

end



