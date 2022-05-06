class DrinksController < ApplicationController
    def index
        drinks = Drink.all
        render json: drinks, include: [:restaurant]
    end

    def show
        drink = Drink.find_by(id: params[:id])
        if drink
            render json: drink.users
        end
    end

end



# Create custom route that returns all drinks greater than 3 , class method that uses active record query methods 
