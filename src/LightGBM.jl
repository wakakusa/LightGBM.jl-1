module LightGBM

using Dates
import Base
import Libdl
import StatsBase
import Libdl

struct LibraryNotFoundError <: Exception
    msg::String
end


function find_library(library_name::String, custom_paths::Vector{String})

    # Search system filedirs first, returns empty string if not found
    output = Libdl.find_library(library_name)

    if output == ""
        # try specified paths
        @info("$(library_name) not found in system dirs, trying fallback")
        output = Libdl.find_library(library_name, custom_paths)
    else
        @info("$(library_name) found in system dirs!")
    end

    if output == ""
        throw(LibraryNotFoundError("$(library_name) not found. Please ensure this library is either in system dirs or the dedicated paths: $(custom_paths)"))
    end

    return output

end

const LGBM_library = find_library("lib_lightgbm", [@__DIR__])

include("wrapper.jl")
include("estimators.jl")
include("utils.jl")
include("fit.jl")
include("predict.jl")
include("cv.jl")
include("search_cv.jl")
include(joinpath(@__DIR__, "MLJInterface.jl"))

export fit!, predict, predict_classes, cv, search_cv, savemodel, loadmodel!
export LGBMEstimator, LGBMRegression, LGBMClassification

end # module LightGBM
