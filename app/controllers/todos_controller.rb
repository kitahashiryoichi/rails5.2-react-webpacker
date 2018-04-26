class TodosController < ApplicationController
  def index
    @todos = %w(hoge hage)
  end
end
