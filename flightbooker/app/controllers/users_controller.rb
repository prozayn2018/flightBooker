class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)    # Not the final implementation!
    if @user.save
      log_in @user
      render 'new'
      # Handle a successful save.
    else
      flash[:success] = "Notworking!"
      redirect_to @user
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end

    def signup
    end

    def flight
    end

    def maps

    end


    def login
    end


    def searchFlights
    end

    def pickFlight
    end

    def passengerInfo
    end

    def itinerary
    end

    def about
    end
end
