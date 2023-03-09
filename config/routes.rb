Rails.application.routes.draw do
  namespace :v1 do
    get 'greets', to: 'greets#index'
  end
  root 'roots#index'
end
