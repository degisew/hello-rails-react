class api::GreetsController < ApplicationController
  def index
    greetings = Message.all
    render json: greetings
  end
end
