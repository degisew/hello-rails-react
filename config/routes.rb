Rails.application.routes.draw do
  namespace :api do
    get 'greets', to: 'greets#index', as: 'greets_path'
  end
  root 'roots#index'
end
