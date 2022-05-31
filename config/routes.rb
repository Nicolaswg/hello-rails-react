Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
	root "stactic#index"
	namespace :v1, defaults: { format: 'json' } do
		get 'messages', to: 'messages#index'
	end

	get '*page', to: 'stactic#index', constraints: ->(req) do
		!req.xhr? && req.format.html?
	end
end
