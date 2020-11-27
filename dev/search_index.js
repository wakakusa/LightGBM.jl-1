var documenterSearchIndex = {"docs":
[{"location":"functions/#Functions-1","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"functions/#","page":"Functions","title":"Functions","text":"","category":"page"},{"location":"functions/#","page":"Functions","title":"Functions","text":"Modules = [LightGBM]","category":"page"},{"location":"functions/#LightGBM.LGBMClassification-Tuple{}","page":"Functions","title":"LightGBM.LGBMClassification","text":"LGBMClassification(;[\n    objective = \"multiclass\",\n    boosting = \"gbdt\",\n    num_iterations = 10,\n    learning_rate = .1,\n    num_leaves = 127,\n    max_depth = -1,\n    tree_learner = \"serial\",\n    num_threads = Sys.CPU_THREADS,\n    histogram_pool_size = -1.,\n    min_data_in_leaf = 100,\n    min_sum_hessian_in_leaf = 10.,\n    max_delta_step = 0.,\n    lambda_l1 = 0.,\n    lambda_l2 = 0.,\n    min_gain_to_split = 0.,\n    feature_fraction = 1.,\n    feature_fraction_bynode = 1.,\n    feature_fraction_seed = 2,\n    bagging_fraction = 1.,\n    pos_bagging_fraction = 1.,\n    neg_bagging_fraction = 1.,\n    bagging_freq = 0,\n    bagging_seed = 3,\n    early_stopping_round = 0,\n    extra_trees = false,\n    extra_seed = 6,\n    max_bin = 255,\n    bin_construct_sample_cnt = 200000,\n    data_random_seed = 1,\n    init_score = \"\",\n    is_sparse = true,\n    save_binary = false,\n    categorical_feature = Int[],\n    use_missing = true,\n    is_unbalance = false,\n    boost_from_average = true,\n    scale_pos_weight = 1.0,\n    sigmoid = 1.0,\n    drop_rate = 0.1,\n    max_drop = 50,\n    skip_drop = 0.5,\n    xgboost_dart_mode = false,\n    uniform_drop = false,\n    drop_seed = 4,\n    top_rate = 0.2,\n    other_rate = 0.1,\n    min_data_per_group = 100,\n    max_cat_threshold = 32,\n    cat_l2 = 10.0,\n    cat_smooth = 10.0,\n    metric = [\"multi_logloss\"],\n    metric_freq = 1,\n    is_training_metric = false,\n    ndcg_at = Int[],\n    num_machines = 1,\n    local_listen_port = 12400,\n    time_out = 120,\n    machine_list_file = \"\",\n    num_class = 1,\n    device_type=\"cpu\",\n    force_col_wise = false,\n    force_row_wise = false,\n])\n\nReturn a LGBMClassification estimator.\n\n\n\n\n\n","category":"method"},{"location":"functions/#LightGBM.LGBMRegression-Tuple{}","page":"Functions","title":"LightGBM.LGBMRegression","text":"LGBMRegression(; [\n    objective = \"regression\",\n    boosting = \"gbdt\",\n    num_iterations = 10,\n    learning_rate = .1,\n    num_leaves = 127,\n    max_depth = -1,\n    tree_learner = \"serial\",\n    num_threads = Sys.CPU_THREADS,\n    histogram_pool_size = -1.,\n    min_data_in_leaf = 100,\n    min_sum_hessian_in_leaf = 10.,\n    max_delta_step = 0.,\n    lambda_l1 = 0.,\n    lambda_l2 = 0.,\n    min_gain_to_split = 0.,\n    feature_fraction = 1.,\n    feature_fraction_bynode = 1.,\n    feature_fraction_seed = 2,\n    bagging_fraction = 1.,\n    bagging_freq = 0,\n    bagging_seed = 3,\n    early_stopping_round = 0,\n    extra_trees = false\n    extra_seed = 6,\n    max_bin = 255,\n    bin_construct_sample_cnt = 200000,\n    data_random_seed = 1,\n    init_score = \"\",\n    is_sparse = true,\n    save_binary = false,\n    categorical_feature = Int[],\n    use_missing = true,\n    is_unbalance = false,\n    boost_from_average = true,\n    drop_rate = 0.1,\n    max_drop = 50,\n    skip_drop = 0.5,\n    xgboost_dart_mode = false,\n    uniform_drop = false,\n    drop_seed = 4,\n    top_rate = 0.2,\n    other_rate = 0.1,\n    min_data_per_group = 100,\n    max_cat_threshold = 32,\n    cat_l2 = 10.0,\n    cat_smooth = 10.0,\n    metric = [\"l2\"],\n    metric_freq = 1,\n    is_training_metric = false,\n    ndcg_at = Int[],\n    num_machines = 1,\n    local_listen_port = 12400,\n    time_out = 120,\n    machine_list_file = \"\",\n    device_type=\"cpu\",\n    force_col_wise = false\n    force_row_wise = false\n])\n\nReturn a LGBMRegression estimator.\n\n\n\n\n\n","category":"method"},{"location":"functions/#LightGBM.cv-Union{Tuple{Ty}, Tuple{TX}, Tuple{LGBMEstimator,Array{TX,2},Array{Ty,1},Any}} where Ty<:Real where TX<:Real","page":"Functions","title":"LightGBM.cv","text":"cv(estimator, X, y, splits; [verbosity = 1])\n\nCross-validate the estimator with features data X and label y. The iterable splits provides vectors of indices for the training dataset. The remaining indices are used to create the validation dataset.\n\nReturn a dictionary with an entry for the validation dataset and, if the parameter is_training_metric is set in the estimator, an entry for the training dataset. Each entry of the dictionary is another dictionary with an entry for each validation metric in the estimator. Each of these entries is an array that holds the validation metric's value for each dataset, at the last valid iteration.\n\nArguments\n\nestimator::LGBMEstimator: the estimator to be fit.\nX::Matrix{TX<:Real}: the features data.\ny::Vector{Ty<:Real}: the labels.\nsplits: the iterable providing arrays of indices for the training dataset.\nverbosity::Integer: keyword argument that controls LightGBM's verbosity. < 0 for fatal logs   only, 0 includes warning logs, 1 includes info logs, and > 1 includes debug logs.\n\n\n\n\n\n","category":"method"},{"location":"functions/#LightGBM.fit!-Union{Tuple{Ti}, Tuple{Tw}, Tuple{Ty}, Tuple{TX}, Tuple{LGBMEstimator,Array{TX,2},Array{Ty,1},Vararg{Tuple{Array{TX,2},Array{Ty,1}},N} where N}} where Ti<:Real where Tw<:Real where Ty<:Real where TX<:Real","page":"Functions","title":"LightGBM.fit!","text":"fit!(estimator, num_iterations, X, y[, test...]; [verbosity = 1, is_row_major = false])\nfit!(estimator, X, y[, test...]; [verbosity = 1, is_row_major = false])\nfit!(estimator, X, y, train_indices[, test_indices...]; [verbosity = 1, is_row_major = false])\nfit!(estimator, train_dataset[, test_datasets...]; [verbosity = 1])\n\nFit the estimator with features data X and label y using the X-y pairs in test as validation sets. Alternatively, Fit the estimator with train_dataset and test_datasets in the form of Dataset class(es)\n\nReturn a dictionary with an entry for each validation set. Each entry of the dictionary is another dictionary with an entry for each validation metric in the estimator. Each of these entries is an array that holds the validation metric's value at each iteration.\n\nArguments\n\nestimator::LGBMEstimator: the estimator to be fit.\nX::Matrix{TX<:Real}: the features data.\ny::Vector{Ty<:Real}: the labels.\ntest::Tuple{Matrix{TX},Vector{Ty}}...: optionally contains one or more tuples of X-y pairs of   the same types as X and y that should be used as validation sets.\ntrain_dataset::Dataset: prepared train_dataset\ntest_datasets::Vector{Dataset}: (optional) prepared test_datasets\nverbosity::Integer: keyword argument that controls LightGBM's verbosity. < 0 for fatal logs   only, 0 includes warning logs, 1 includes info logs, and > 1 includes debug logs.\nis_row_major::Bool: keyword argument that indicates whether or not X is row-major. true   indicates that it is row-major, false indicates that it is column-major (Julia's default).\nweights::Vector{Tw<:Real}: the training weights.\ninit_score::Vector{Ti<:Real}: the init scores.\n\n\n\n\n\n","category":"method"},{"location":"functions/#LightGBM.loadmodel-Tuple{LGBMEstimator,String}","page":"Functions","title":"LightGBM.loadmodel","text":"loadmodel(estimator, filename)\n\nLoad the fitted model filename into estimator. Note that this only loads the fitted model—not the parameters or data of the estimator whose model was saved as filename.\n\nArguments\n\nestimator::LGBMEstimator: the estimator to use in the prediction.\nfilename::String: the name of the file that contains the model.\n\n\n\n\n\n","category":"method"},{"location":"functions/#LightGBM.predict-Union{Tuple{TX}, Tuple{LGBMEstimator,AbstractArray{TX,2}}} where TX<:Real","page":"Functions","title":"LightGBM.predict","text":"predict(estimator, X; [predict_type = 0, num_iterations = -1, verbosity = 1,\nis_row_major = false])\n\nReturn a MATRIX with the labels that the estimator predicts for features data X. Use dropdims if a vector is required.\n\nArguments\n\nestimator::LGBMEstimator: the estimator to use in the prediction.\nX::Matrix{T<:Real}: the features data.\npredict_type::Integer: keyword argument that controls the prediction type. 0 for normal   scores with transform (if needed), 1 for raw scores, 2 for leaf indices, 3 for SHAP contributions.\nnum_iterations::Integer: keyword argument that sets the number of iterations of the model to   use in the prediction. < 0 for all iterations.\nverbosity::Integer: keyword argument that controls LightGBM's verbosity. < 0 for fatal logs   only, 0 includes warning logs, 1 includes info logs, and > 1 includes debug logs.\nis_row_major::Bool: keyword argument that indicates whether or not X is row-major. true   indicates that it is row-major, false indicates that it is column-major (Julia's default).\n\nOne can obtain some form of feature importances by averaging SHAP contributions across predictions, i.e. mean(LightGBM.predict(estimator, X; predict_type=3); dims=1)\n\n\n\n\n\n","category":"method"},{"location":"functions/#LightGBM.savemodel-Tuple{LGBMEstimator,String}","page":"Functions","title":"LightGBM.savemodel","text":"savemodel(estimator, filename; [num_iteration = -1])\n\nSave the fitted model in estimator as filename.\n\nArguments\n\nestimator::LGBMEstimator: the estimator to use in the prediction.\nfilename::String: the name of the file to save the model in.\nnum_iteration::Integer: keyword argument that sets the number of iterations of the model that   should be saved. < 0 for all iterations.\nstart_iteration : : Start index of the iteration that should be saved.\nfeature_importance_type : Type of feature importance,   can be CAPIFEATUREIMPORTANCESPLIT or CAPIFEATUREIMPORTANCEGAIN\n\n\n\n\n\n","category":"method"},{"location":"functions/#LightGBM.search_cv-Union{Tuple{Ty}, Tuple{TX}, Tuple{LGBMEstimator,Array{TX,2},Array{Ty,1},Any,Any}} where Ty<:Real where TX<:Real","page":"Functions","title":"LightGBM.search_cv","text":"search_cv(estimator, X, y, splits, params; [verbosity = 1])\n\nExhaustive search over the specified sets of parameter values for the estimator with features data X and label y. The iterable splits provides vectors of indices for the training dataset. The remaining indices are used to create the validation dataset.\n\nReturn an array with a tuple for each set of parameters value, where the first entry is a set of parameter values and the second entry the cross-validation outcome of those values. This outcome is a dictionary with an entry for the validation dataset and, if the parameter is_training_metric is set in the estimator, an entry for the training dataset. Each entry of the dictionary is another dictionary with an entry for each validation metric in the estimator. Each of these entries is an array that holds the validation metric's value for each dataset, at the last valid iteration.\n\nArguments\n\nestimator::LGBMEstimator: the estimator to be fit.\nX::Matrix{TX<:Real}: the features data.\ny::Vector{Ty<:Real}: the labels.\nsplits: the iterable providing arrays of indices for the training dataset.\nparams: the iterable providing dictionaries of pairs of parameters (Symbols) and values to   configure the estimator with.\nverbosity::Integer: keyword argument that controls LightGBM's verbosity. < 0 for fatal logs   only, 0 includes warning logs, 1 includes info logs, and > 1 includes debug logs.\n\n\n\n\n\n","category":"method"},{"location":"functions/#LightGBM.gain_importance-Tuple{LGBMEstimator,Integer}","page":"Functions","title":"LightGBM.gain_importance","text":"gain_importance(estimator, num_iteration)\ngain_importance(estimator)\n\nReturns the importance of a fitted booster in terms of information gain across\nall boostings, or up to `num_iteration` boostings\n\n\n\n\n\n","category":"method"},{"location":"functions/#LightGBM.split_importance-Tuple{LGBMEstimator,Integer}","page":"Functions","title":"LightGBM.split_importance","text":"split_importance(estimator, num_iteration)\nsplit_importance(estimator)\n\nReturns the importance of a fitted booster in terms of number of times feature was\nused in a split across all boostings, or up to `num_iteration` boostings\n\n\n\n\n\n","category":"method"},{"location":"#LightGBM.jl-1","page":"Home","title":"LightGBM.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"LightGBM.jl provides a high-performance Julia interface for Microsoft's LightGBM.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The package adds a couple of convenience features:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Automated cross-validation \nExhaustive grid search search procedure\nIntegration with MLJ (which also provides the above via different interfaces)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Additionally, the package automatically converts all LightGBM parameters that refer to indices  (e.g. categorical_feature) from Julia's one-based indices to C's zero-based indices.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"A majority of the C-interfaces are implemented. A few are known to be missing and are tracked.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"All major operating systems (Windows, Linux, and Mac OS X) are supported. Julia versions 1.0+ are supported.","category":"page"},{"location":"#Table-of-Contents-1","page":"Home","title":"Table of Contents","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"LightGBM.jl\nTable of Contents\nInstallation\nA simple example using LightGBM example files\nParameters\nMLJ Support","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Please ensure your system meets the pre-requisites for LightGBM. This generally means ensuring that libomp is installed and linkable on your system. See here for Microsoft's installation guide.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Please note that the package actually downloads a precompiled binary so you do not need to install LightGBM first. This is done as a user convenience, and support will be added for supplying ones own LightGBM binary (for GPU acceleration, etc).","category":"page"},{"location":"#","page":"Home","title":"Home","text":"To add the package to Julia:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pkg.add(\"LightGBM\")","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Running tests for the package requires the use of the LightGBM example files, download and extract the LightGBM source and set the enviroment variable LIGHTGBM_EXAMPLES_PATH to the root of the source installation. Then you can run the tests by simply doing","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pkg.test(\"LightGBM\")","category":"page"},{"location":"#A-simple-example-using-LightGBM-example-files-1","page":"Home","title":"A simple example using LightGBM example files","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"First, download LightGBM source  and untar it somewhere.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"cd ~\nwget https://github.com/microsoft/LightGBM/archive/v2.3.1.tar.gz\ntar -xf v2.3.1.tar.gz","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using LightGBM\nusing DelimitedFiles\n\nLIGHTGBM_SOURCE = abspath(\"~/LightGBM-2.3.1\")\n\n# Load LightGBM's binary classification example.\nbinary_test = readdlm(joinpath(LIGHTGBM_SOURCE, \"examples\", \"binary_classification\", \"binary.test\"), '\\t')\nbinary_train = readdlm(joinpath(LIGHTGBM_SOURCE, \"examples\", \"binary_classification\", \"binary.train\"), '\\t')\nX_train = binary_train[:, 2:end]\ny_train = binary_train[:, 1]\nX_test = binary_test[:, 2:end]\ny_test = binary_test[:, 1]\n\n# Create an estimator with the desired parameters—leave other parameters at the default values.\nestimator = LGBMClassification(\n    objective = \"binary\",\n    num_iterations = 100,\n    learning_rate = .1,\n    early_stopping_round = 5,\n    feature_fraction = .8,\n    bagging_fraction = .9,\n    bagging_freq = 1,\n    num_leaves = 1000,\n    num_class = 1,\n    metric = [\"auc\", \"binary_logloss\"]\n)\n\n# Fit the estimator on the training data and return its scores for the test data.\nfit!(estimator, X_train, y_train, (X_test, y_test))\n\n# Predict arbitrary data with the estimator.\npredict(estimator, X_train)\n\n# Cross-validate using a two-fold cross-validation iterable providing training indices.\nsplits = (collect(1:3500), collect(3501:7000))\ncv(estimator, X_train, y_train, splits)\n\n# Exhaustive search on an iterable containing all combinations of learning_rate ∈ {.1, .2} and\n# bagging_fraction ∈ {.8, .9}\nparams = [Dict(:learning_rate => learning_rate,\n               :bagging_fraction => bagging_fraction) for\n          learning_rate in (.1, .2),\n          bagging_fraction in (.8, .9)]\nsearch_cv(estimator, X_train, y_train, splits, params)\n\n# Save and load the fitted model.\nfilename = pwd() * \"/finished.model\"\nsavemodel(estimator, filename)\nloadmodel(estimator, filename)","category":"page"},{"location":"#Parameters-1","page":"Home","title":"Parameters","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Note that a lot of parameters used within this module and in the code and examples are exact matches with those from LightGBM. Not all of these are necessarily supported but see the guide for detailed explanations of what these parameters do and their valid values.","category":"page"},{"location":"#MLJ-Support-1","page":"Home","title":"MLJ Support","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package has an interface to MLJ. Exhaustive MLJ documentation is out of scope for here, however the main things are:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The MLJ interface models are","category":"page"},{"location":"#","page":"Home","title":"Home","text":"LightGBM.MLJInterface.LGBMClassifier\nLightGBM.MLJInterface.LGBMRegressor","category":"page"},{"location":"#","page":"Home","title":"Home","text":"And these have the same interface parameters as the estimators","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The interface models are generally passed to MLJBase.fit or MLJBase.machine and integrated as part of a larger MLJ pipeline. An example is provided","category":"page"}]
}
