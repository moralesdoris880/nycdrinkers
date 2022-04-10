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

    def all
        ratings = Rating.all
        render json: ratings
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

    private

    def rating_params
        params.permit(:comment,:drink_rating,:user_id,:drink_id)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: ["Incorrect"]}, status: :unprocessable_entity
    end

end
