Search.setIndex({docnames:["README","configuration","data","index","inference","package/modules","package/opennmt","package/opennmt.config","package/opennmt.constants","package/opennmt.decoders","package/opennmt.decoders.decoder","package/opennmt.decoders.rnn_decoder","package/opennmt.decoders.self_attention_decoder","package/opennmt.encoders","package/opennmt.encoders.conv_encoder","package/opennmt.encoders.encoder","package/opennmt.encoders.mean_encoder","package/opennmt.encoders.rnn_encoder","package/opennmt.encoders.self_attention_encoder","package/opennmt.inputters","package/opennmt.inputters.inputter","package/opennmt.inputters.record_inputter","package/opennmt.inputters.text_inputter","package/opennmt.layers","package/opennmt.layers.bridge","package/opennmt.layers.position","package/opennmt.layers.reducer","package/opennmt.layers.transformer","package/opennmt.models","package/opennmt.models.model","package/opennmt.models.sequence_classifier","package/opennmt.models.sequence_tagger","package/opennmt.models.sequence_to_sequence","package/opennmt.models.transformer","package/opennmt.runner","package/opennmt.tokenizers","package/opennmt.tokenizers.opennmt_tokenizer","package/opennmt.tokenizers.tokenizer","package/opennmt.utils","package/opennmt.utils.beam_search","package/opennmt.utils.cell","package/opennmt.utils.data","package/opennmt.utils.decay","package/opennmt.utils.evaluator","package/opennmt.utils.hooks","package/opennmt.utils.losses","package/opennmt.utils.misc","package/opennmt.utils.optim","package/opennmt.utils.parallel","package/opennmt.utils.vocab","serving","tokenization","training"],envversion:52,filenames:["README.md","configuration.md","data.md","index.rst","inference.md","package/modules.rst","package/opennmt.rst","package/opennmt.config.rst","package/opennmt.constants.rst","package/opennmt.decoders.rst","package/opennmt.decoders.decoder.rst","package/opennmt.decoders.rnn_decoder.rst","package/opennmt.decoders.self_attention_decoder.rst","package/opennmt.encoders.rst","package/opennmt.encoders.conv_encoder.rst","package/opennmt.encoders.encoder.rst","package/opennmt.encoders.mean_encoder.rst","package/opennmt.encoders.rnn_encoder.rst","package/opennmt.encoders.self_attention_encoder.rst","package/opennmt.inputters.rst","package/opennmt.inputters.inputter.rst","package/opennmt.inputters.record_inputter.rst","package/opennmt.inputters.text_inputter.rst","package/opennmt.layers.rst","package/opennmt.layers.bridge.rst","package/opennmt.layers.position.rst","package/opennmt.layers.reducer.rst","package/opennmt.layers.transformer.rst","package/opennmt.models.rst","package/opennmt.models.model.rst","package/opennmt.models.sequence_classifier.rst","package/opennmt.models.sequence_tagger.rst","package/opennmt.models.sequence_to_sequence.rst","package/opennmt.models.transformer.rst","package/opennmt.runner.rst","package/opennmt.tokenizers.rst","package/opennmt.tokenizers.opennmt_tokenizer.rst","package/opennmt.tokenizers.tokenizer.rst","package/opennmt.utils.rst","package/opennmt.utils.beam_search.rst","package/opennmt.utils.cell.rst","package/opennmt.utils.data.rst","package/opennmt.utils.decay.rst","package/opennmt.utils.evaluator.rst","package/opennmt.utils.hooks.rst","package/opennmt.utils.losses.rst","package/opennmt.utils.misc.rst","package/opennmt.utils.optim.rst","package/opennmt.utils.parallel.rst","package/opennmt.utils.vocab.rst","serving.md","tokenization.md","training.md"],objects:{"":{opennmt:[6,0,0,"-"]},"opennmt.config":{load_config:[7,1,1,""],load_model:[7,1,1,""],load_model_module:[7,1,1,""]},"opennmt.decoders":{decoder:[10,0,0,"-"],rnn_decoder:[11,0,0,"-"],self_attention_decoder:[12,0,0,"-"]},"opennmt.decoders.decoder":{Decoder:[10,2,1,""],build_output_layer:[10,1,1,""],get_embedding_fn:[10,1,1,""],get_sampling_probability:[10,1,1,""],logits_to_cum_log_probs:[10,1,1,""]},"opennmt.decoders.decoder.Decoder":{decode:[10,3,1,""],dynamic_decode:[10,3,1,""],dynamic_decode_and_search:[10,3,1,""]},"opennmt.decoders.rnn_decoder":{AttentionalRNNDecoder:[11,2,1,""],MultiAttentionalRNNDecoder:[11,2,1,""],RNNDecoder:[11,2,1,""]},"opennmt.decoders.rnn_decoder.AttentionalRNNDecoder":{__init__:[11,3,1,""]},"opennmt.decoders.rnn_decoder.MultiAttentionalRNNDecoder":{__init__:[11,3,1,""]},"opennmt.decoders.rnn_decoder.RNNDecoder":{__init__:[11,3,1,""],decode:[11,3,1,""],dynamic_decode:[11,3,1,""],dynamic_decode_and_search:[11,3,1,""]},"opennmt.decoders.self_attention_decoder":{SelfAttentionDecoder:[12,2,1,""]},"opennmt.decoders.self_attention_decoder.SelfAttentionDecoder":{__init__:[12,3,1,""],decode:[12,3,1,""],dynamic_decode:[12,3,1,""],dynamic_decode_and_search:[12,3,1,""]},"opennmt.encoders":{conv_encoder:[14,0,0,"-"],encoder:[15,0,0,"-"],mean_encoder:[16,0,0,"-"],rnn_encoder:[17,0,0,"-"],self_attention_encoder:[18,0,0,"-"]},"opennmt.encoders.conv_encoder":{ConvEncoder:[14,2,1,""]},"opennmt.encoders.conv_encoder.ConvEncoder":{__init__:[14,3,1,""],encode:[14,3,1,""]},"opennmt.encoders.encoder":{Encoder:[15,2,1,""],ParallelEncoder:[15,2,1,""],SequentialEncoder:[15,2,1,""]},"opennmt.encoders.encoder.Encoder":{encode:[15,3,1,""]},"opennmt.encoders.encoder.ParallelEncoder":{__init__:[15,3,1,""],encode:[15,3,1,""]},"opennmt.encoders.encoder.SequentialEncoder":{__init__:[15,3,1,""],encode:[15,3,1,""]},"opennmt.encoders.mean_encoder":{MeanEncoder:[16,2,1,""]},"opennmt.encoders.mean_encoder.MeanEncoder":{encode:[16,3,1,""]},"opennmt.encoders.rnn_encoder":{BidirectionalRNNEncoder:[17,2,1,""],GoogleRNNEncoder:[17,2,1,""],PyramidalRNNEncoder:[17,2,1,""],RNNEncoder:[17,2,1,""],UnidirectionalRNNEncoder:[17,2,1,""]},"opennmt.encoders.rnn_encoder.BidirectionalRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.GoogleRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.PyramidalRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.RNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.UnidirectionalRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.self_attention_encoder":{SelfAttentionEncoder:[18,2,1,""]},"opennmt.encoders.self_attention_encoder.SelfAttentionEncoder":{__init__:[18,3,1,""],encode:[18,3,1,""]},"opennmt.inputters":{inputter:[20,0,0,"-"],record_inputter:[21,0,0,"-"],text_inputter:[22,0,0,"-"]},"opennmt.inputters.inputter":{Inputter:[20,2,1,""],MixedInputter:[20,2,1,""],MultiInputter:[20,2,1,""],ParallelInputter:[20,2,1,""]},"opennmt.inputters.inputter.Inputter":{add_process_hooks:[20,3,1,""],get_dataset_size:[20,3,1,""],get_length:[20,3,1,""],get_serving_input_receiver:[20,3,1,""],initialize:[20,3,1,""],make_dataset:[20,3,1,""],process:[20,3,1,""],remove_data_field:[20,3,1,""],set_data_field:[20,3,1,""],transform:[20,3,1,""],transform_data:[20,3,1,""],visualize:[20,3,1,""]},"opennmt.inputters.inputter.MixedInputter":{__init__:[20,3,1,""],get_length:[20,3,1,""],make_dataset:[20,3,1,""],transform:[20,3,1,""]},"opennmt.inputters.inputter.MultiInputter":{get_dataset_size:[20,3,1,""],initialize:[20,3,1,""],make_dataset:[20,3,1,""],transform:[20,3,1,""],visualize:[20,3,1,""]},"opennmt.inputters.inputter.ParallelInputter":{__init__:[20,3,1,""],get_length:[20,3,1,""],make_dataset:[20,3,1,""],transform:[20,3,1,""]},"opennmt.inputters.record_inputter":{SequenceRecordInputter:[21,2,1,""],write_sequence_record:[21,1,1,""]},"opennmt.inputters.record_inputter.SequenceRecordInputter":{__init__:[21,3,1,""],get_dataset_size:[21,3,1,""],get_length:[21,3,1,""],make_dataset:[21,3,1,""],transform:[21,3,1,""]},"opennmt.inputters.text_inputter":{CharConvEmbedder:[22,2,1,""],TextInputter:[22,2,1,""],WordEmbedder:[22,2,1,""],load_pretrained_embeddings:[22,1,1,""],tokens_to_chars:[22,1,1,""],visualize_embeddings:[22,1,1,""]},"opennmt.inputters.text_inputter.CharConvEmbedder":{__init__:[22,3,1,""],initialize:[22,3,1,""],transform:[22,3,1,""],visualize:[22,3,1,""]},"opennmt.inputters.text_inputter.TextInputter":{get_dataset_size:[22,3,1,""],get_length:[22,3,1,""],initialize:[22,3,1,""],make_dataset:[22,3,1,""],transform:[22,3,1,""]},"opennmt.inputters.text_inputter.WordEmbedder":{__init__:[22,3,1,""],initialize:[22,3,1,""],transform:[22,3,1,""],visualize:[22,3,1,""]},"opennmt.layers":{bridge:[24,0,0,"-"],position:[25,0,0,"-"],reducer:[26,0,0,"-"],transformer:[27,0,0,"-"]},"opennmt.layers.bridge":{Bridge:[24,2,1,""],CopyBridge:[24,2,1,""],DenseBridge:[24,2,1,""],ZeroBridge:[24,2,1,""],assert_state_is_compatible:[24,1,1,""]},"opennmt.layers.bridge.Bridge":{__call__:[24,3,1,""]},"opennmt.layers.bridge.DenseBridge":{__init__:[24,3,1,""]},"opennmt.layers.position":{PositionEmbedder:[25,2,1,""],PositionEncoder:[25,2,1,""],SinusoidalPositionEncoder:[25,2,1,""],make_positions:[25,1,1,""]},"opennmt.layers.position.PositionEmbedder":{__init__:[25,3,1,""],encode:[25,3,1,""]},"opennmt.layers.position.PositionEncoder":{__call__:[25,3,1,""],apply:[25,3,1,""],apply_one:[25,3,1,""],encode:[25,3,1,""],encode_sequence:[25,3,1,""]},"opennmt.layers.position.SinusoidalPositionEncoder":{encode:[25,3,1,""]},"opennmt.layers.reducer":{ConcatReducer:[26,2,1,""],JoinReducer:[26,2,1,""],MultiplyReducer:[26,2,1,""],Reducer:[26,2,1,""],SumReducer:[26,2,1,""],pad_in_time:[26,1,1,""],pad_n_with_identity:[26,1,1,""],pad_with_identity:[26,1,1,""],roll_sequence:[26,1,1,""]},"opennmt.layers.reducer.ConcatReducer":{reduce:[26,3,1,""],reduce_sequence:[26,3,1,""]},"opennmt.layers.reducer.JoinReducer":{reduce:[26,3,1,""],reduce_sequence:[26,3,1,""]},"opennmt.layers.reducer.MultiplyReducer":{reduce:[26,3,1,""],reduce_sequence:[26,3,1,""]},"opennmt.layers.reducer.Reducer":{reduce:[26,3,1,""],reduce_sequence:[26,3,1,""],zip_and_reduce:[26,3,1,""]},"opennmt.layers.reducer.SumReducer":{reduce:[26,3,1,""],reduce_sequence:[26,3,1,""]},"opennmt.layers.transformer":{build_future_mask:[27,1,1,""],build_sequence_mask:[27,1,1,""],combine_heads:[27,1,1,""],dot_product_attention:[27,1,1,""],drop_and_add:[27,1,1,""],feed_forward:[27,1,1,""],fused_projection:[27,1,1,""],multi_head_attention:[27,1,1,""],norm:[27,1,1,""],split_heads:[27,1,1,""],tile_sequence_length:[27,1,1,""]},"opennmt.models":{model:[29,0,0,"-"],sequence_classifier:[30,0,0,"-"],sequence_tagger:[31,0,0,"-"],sequence_to_sequence:[32,0,0,"-"],transformer:[33,0,0,"-"]},"opennmt.models.model":{Model:[29,2,1,""]},"opennmt.models.model.Model":{input_fn:[29,3,1,""],model_fn:[29,3,1,""],print_prediction:[29,3,1,""],serving_input_fn:[29,3,1,""]},"opennmt.models.sequence_classifier":{SequenceClassifier:[30,2,1,""]},"opennmt.models.sequence_classifier.SequenceClassifier":{__init__:[30,3,1,""],print_prediction:[30,3,1,""]},"opennmt.models.sequence_tagger":{SequenceTagger:[31,2,1,""],flag_bioes_tags:[31,1,1,""]},"opennmt.models.sequence_tagger.SequenceTagger":{__init__:[31,3,1,""],print_prediction:[31,3,1,""]},"opennmt.models.sequence_to_sequence":{SequenceToSequence:[32,2,1,""],shift_target_sequence:[32,1,1,""]},"opennmt.models.sequence_to_sequence.SequenceToSequence":{__init__:[32,3,1,""],print_prediction:[32,3,1,""]},"opennmt.models.transformer":{Transformer:[33,2,1,""]},"opennmt.models.transformer.Transformer":{__init__:[33,3,1,""]},"opennmt.runner":{Runner:[34,2,1,""]},"opennmt.runner.Runner":{"export":[34,3,1,""],__init__:[34,3,1,""],evaluate:[34,3,1,""],infer:[34,3,1,""],train:[34,3,1,""],train_and_evaluate:[34,3,1,""]},"opennmt.tokenizers":{add_command_line_arguments:[35,1,1,""],build_tokenizer:[35,1,1,""],tokenizer:[37,0,0,"-"]},"opennmt.tokenizers.tokenizer":{CharacterTokenizer:[37,2,1,""],SpaceTokenizer:[37,2,1,""],Tokenizer:[37,2,1,""]},"opennmt.tokenizers.tokenizer.Tokenizer":{__init__:[37,3,1,""],detokenize:[37,3,1,""],detokenize_stream:[37,3,1,""],initialize:[37,3,1,""],tokenize:[37,3,1,""],tokenize_stream:[37,3,1,""]},"opennmt.utils":{beam_search:[39,0,0,"-"],cell:[40,0,0,"-"],data:[41,0,0,"-"],decay:[42,0,0,"-"],evaluator:[43,0,0,"-"],hooks:[44,0,0,"-"],losses:[45,0,0,"-"],misc:[46,0,0,"-"],optim:[47,0,0,"-"],parallel:[48,0,0,"-"],vocab:[49,0,0,"-"]},"opennmt.utils.beam_search":{beam_search:[39,1,1,""],compute_batch_indices:[39,1,1,""],compute_topk_scores_and_seq:[39,1,1,""],get_state_shape_invariants:[39,1,1,""]},"opennmt.utils.cell":{build_cell:[40,1,1,""]},"opennmt.utils.data":{batch_train_dataset:[41,1,1,""],filter_examples_by_length:[41,1,1,""],filter_irregular_batches:[41,1,1,""],random_shard:[41,1,1,""]},"opennmt.utils.decay":{noam_decay:[42,1,1,""],rsqrt_decay:[42,1,1,""]},"opennmt.utils.evaluator":{BLEUDetokEvaluator:[43,2,1,""],BLEUEvaluator:[43,2,1,""],ExternalEvaluator:[43,2,1,""],external_evaluation_fn:[43,1,1,""]},"opennmt.utils.evaluator.BLEUDetokEvaluator":{name:[43,3,1,""]},"opennmt.utils.evaluator.BLEUEvaluator":{name:[43,3,1,""],score:[43,3,1,""]},"opennmt.utils.evaluator.ExternalEvaluator":{__call__:[43,3,1,""],name:[43,4,1,""],score:[43,3,1,""]},"opennmt.utils.hooks":{CountersHook:[44,2,1,""],LogParametersCountHook:[44,2,1,""],SaveEvaluationPredictionHook:[44,2,1,""],add_counter:[44,1,1,""]},"opennmt.utils.hooks.CountersHook":{after_run:[44,3,1,""],before_run:[44,3,1,""],begin:[44,3,1,""]},"opennmt.utils.hooks.LogParametersCountHook":{begin:[44,3,1,""]},"opennmt.utils.hooks.SaveEvaluationPredictionHook":{__init__:[44,3,1,""],after_run:[44,3,1,""],before_run:[44,3,1,""],begin:[44,3,1,""],end:[44,3,1,""]},"opennmt.utils.losses":{cross_entropy_loss:[45,1,1,""],cross_entropy_sequence_loss:[45,1,1,""]},"opennmt.utils.misc":{add_dict_to_collection:[46,1,1,""],count_lines:[46,1,1,""],count_parameters:[46,1,1,""],extract_batches:[46,1,1,""],extract_prefixed_keys:[46,1,1,""],get_dict_from_collection:[46,1,1,""],item_or_tuple:[46,1,1,""],print_bytes:[46,1,1,""]},"opennmt.utils.optim":{get_optimizer_class:[47,1,1,""],learning_rate_decay_fn:[47,1,1,""],optimize:[47,1,1,""]},"opennmt.utils.parallel":{GraphDispatcher:[48,2,1,""],split_batch:[48,1,1,""]},"opennmt.utils.parallel.GraphDispatcher":{__call__:[48,3,1,""],__init__:[48,3,1,""],repeat:[48,3,1,""],shard:[48,3,1,""]},"opennmt.utils.vocab":{Vocab:[49,2,1,""]},"opennmt.utils.vocab.Vocab":{__init__:[49,3,1,""],add:[49,3,1,""],add_from_text:[49,3,1,""],lookup:[49,3,1,""],prune:[49,3,1,""],serialize:[49,3,1,""],size:[49,4,1,""]},opennmt:{config:[7,0,0,"-"],constants:[8,0,0,"-"],decoders:[9,0,0,"-"],encoders:[13,0,0,"-"],inputters:[19,0,0,"-"],layers:[23,0,0,"-"],models:[28,0,0,"-"],runner:[34,0,0,"-"],tokenizers:[35,0,0,"-"],utils:[38,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"2nd":39,"abstract":22,"boolean":39,"byte":46,"case":[11,22,30],"class":[10,11,12,14,15,16,17,18,20,21,22,24,25,26,29,30,31,32,33,34,37,40,43,44,47,48,49],"default":[1,24,39,49],"export":[20,29,34,50,51],"final":[11,39],"function":[7,10,20,22,24,26,29,31,39,40,41,42,43,46,47,50],"int":39,"new":[4,35,39,44,49],"null":[2,37],"return":[7,10,11,15,17,20,22,24,25,26,27,29,31,32,35,37,39,40,41,42,43,45,46,47,48,49,51],"static":26,"true":[11,17,20,22,26,29,30,31,32,39,40,43,45,47,48],"void":2,"while":39,EOS:39,For:[1,2,4,20,31,41,52],Ids:39,Not:[30,31,32],THE:22,The:[1,2,4,7,10,11,12,14,15,17,18,20,21,22,24,25,26,27,29,30,31,32,33,34,37,39,40,41,42,43,44,45,46,47,48,49,51,52],Then:[4,41,52],These:39,Yes:2,__call__:[24,25,43,48],__init__:[11,12,14,15,17,18,20,21,22,24,25,30,31,32,33,34,37,44,48,49],_topk_:39,_topk_flag:39,_topk_scor:39,_topk_seq:39,about:[1,2,22,29,39],abs:[10,12,14,17,18,25,27,33,39,42],accept:[1,2],accordingli:[2,42],accross:[29,41,48],activ:[12,18,20,22,24,33,52],actual:1,adam_with_decai:1,add:[1,11,20,27,31,35,39,40,46,49,52],add_command_line_argu:35,add_count:44,add_dict_to_collect:46,add_from_text:49,add_process_hook:20,add_to_collect:37,added:[0,11,17,20,32,40],addit:[20,22,29,31,37],addition:[11,32],advanc:[2,3,51],aerob:2,after:[11,17,20,31,39,40,47],after_run:44,against:[22,43],aggress:51,align:[2,22,31],aliv:39,all:[2,11,15,20,26,46,50],allow:[1,34],alpha:39,also:[2,20,45,52],altern:11,ani:[22,37],antich:2,api:50,apidoc:0,apo:2,appli:[10,12,14,18,20,22,24,25,27,33,47],apply_on:25,apt:51,arbitrarili:1,architectur:1,arg:[35,48],argument:[11,17,29,35,40,42,44,48],ark:2,ark_to_record:2,around:34,arrai:[21,22,31,46],arxiv:[10,12,14,17,18,25,27,33,39,42],assert:24,assert_state_is_compat:24,asset:[37,50],asset_filepath:37,assign:[20,22,41],associ:[22,49],assum:[20,22,25,39],assumpt:39,asynchron:[29,52],attach:22,attend:[11,27],attent:[1,11,12,18,27,33,40],attention_dropout:[12,18,33],attention_lay:[11,40],attention_mechan:40,attention_mechanism_class:11,attention_wrapp:11,attentionalrnndecod:11,attentionmechan:[11,40],automat:[0,50],avail:[1,39,50],averag:[30,45],average_checkpoint:4,average_in_tim:45,avg:4,axi:26,base:[10,11,12,14,15,16,17,18,20,21,22,24,25,26,29,30,31,32,33,34,35,37,39,41,42,43,44,48,49],baselin:4,basic:11,batch:[26,29,37,39,41,46,48,52],batch_multipli:[29,41],batch_po:39,batch_siz:[26,27,29,39,41],batch_train_dataset:41,batch_typ:[29,41],beam:[10,39],beam_search:[6,38],beam_siz:39,beam_width:[10,11,12],beat:2,becaus:[39,50],been:[2,31],befor:11,before_run:44,begin:44,behavior:[22,51],being:39,best:39,between:[30,31,32,48,52],beyond:2,bidirect:17,bidirectionalrnnencod:17,bin:[1,2,4,51,52],bind:51,bioe:31,bleu:[43,51],bleudetokevalu:43,bleuevalu:43,bool:39,boost:51,both:[17,32],bpe:37,bridg:[6,11,23],broadcast:27,bucket:[29,41],bucket_width:[29,41],budget:2,build:[10,25,27,40,51],build_cel:40,build_future_mask:27,build_output_lay:10,build_sequence_mask:27,build_token:35,build_vocab:51,bureaucraci:2,cach:27,calcul:27,call:[20,43,46,48,51],callabl:[10,11,17,20,24,29,40,41,43,44,48,49],came:2,can:[1,2,4,11,20,29,35,39,41,47,50,51,52],candid:29,capac:2,captur:39,case_insensitive_embed:22,categor:10,cell:[6,11,17,38],cell_class:[11,17,40],chain:[30,31,32,48],chang:42,charact:[1,22,37],charactertoken:37,charconvembedd:22,checkpoint:[34,52],checkpoint_path:[4,34],chief:52,chief_host:52,chunk:31,ckpt:4,classifi:30,classnam:47,client:39,cloth:2,cmake:51,code:[0,1],collabor:2,collect:[20,37,46],collection_nam:46,combin:26,combine_head:27,command:[1,35,52],common:[2,17],compat:[24,30,31,32],compil:51,complet:39,complex:1,comput:[27,31,39,45,52],compute_batch_indic:39,compute_topk_scores_and_seq:39,concaten:[26,27],concatreduc:[15,17,20,26],config:[1,4,5,6,34,51],config_path:7,configur:[2,3,4,7,10,22,30,31,34,37,51],configuration_file_or_kei:[37,51],consid:[1,41,51],consist:51,constant:[5,6,10,42],constrain:[29,41],construct:11,constructor:17,contain:[1,20,21,22,26,27,29,30,31,32,37,39,41,50],content:2,context:27,contrib:[11,40,47],contribut:1,control:4,conv_encod:[6,13],convencod:14,conveni:40,converg:10,convert:[2,48],convolut:[1,14,22],coodin:39,coordin:39,copi:[30,31,32,44,48],copybridg:24,correctli:[31,52],correspond:15,could:31,count:44,count_lin:46,count_paramet:46,counter:44,countershook:44,cpp:50,creat:[2,20,25,39,49],credit:48,crf:31,crf_decod:31,cross:45,cross_entropy_loss:45,cross_entropy_sequence_loss:45,cuda_visible_devic:52,cumul:[10,45],current:[0,20,31,32,33,39,42,44,52],custom:[2,44,51],daisi:[30,31,32,48],daisy_chain_vari:[29,30,31,32,48],data:[1,3,6,10,19,20,21,22,29,30,31,32,33,38,48,50,51,52],data_fil:[20,21,22],dataset:[20,41],dataset_s:41,decai:[6,38,47],decay_r:[42,47],decay_step:[42,47],decay_step_dur:47,decay_typ:47,decayed_learning_r:47,decod:[5,6,24,25,32,39,46,52],decode_length:39,decoded_id:39,decoder_zero_st:24,defin:[1,2,7,8,9,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,33,35,37,38,42,45],definit:50,delimit:37,deliv:2,dens:10,densebridg:24,depend:[20,25,46],depth:[2,10,21,25,26,27],describ:[1,2,10,12,14,17,18,25,27,33,42,47],design:1,detail:[22,29,52],determin:39,detok:[43,51],detoken:[37,51],detokenize_stream:37,dev:[37,51],devic:[29,30,31,32,34,48,52],dict:[32,39,46],dict_:46,dictionari:[7,20,27,29,32,37,46,47,48],differ:39,dim:39,dimens:[17,22,25,26,27,33,39,42,45],dir:50,direct:17,directli:10,directori:[4,7,20,22,43,50,52],disk:[4,49,50],dispatch:48,displai:[2,52],divis:17,divisor:41,doc:0,docker:52,document:[3,52],doe:24,done:20,dot:27,dot_product_attent:27,down:2,drop:[11,12,14,17,18,20,22,27,33,40],drop_and_add:27,dropout:[11,12,14,17,18,20,22,27,33,40],dtype:[10,11,12,20,21,22,25,27,29,32],duplic:[1,2],dure:[4,10,25,50,51,52],dynam:[1,10,25,32,34],dynamic_decod:[10,11,12],dynamic_decode_and_search:[10,11,12],each:[10,11,15,17,21,22,25,26,27,31,33,37,39,40,41,45,46,48,49,52],easi:39,echo:51,economi:2,ecosystem:52,effici:41,either:48,element:[26,29,46],emb:25,embed:[1,10,11,12,19,20,22,52],embedd:22,embedding_fil:22,embedding_file_kei:22,embedding_file_with_head:22,embedding_s:[22,51],embedding_var:22,empti:[7,43],enabl:52,encod:[1,5,6,11,24,25,30,31,32,46],encode_sequ:25,encoder_st:24,end:[1,2,10,32,39,44,50],end_token:[10,11,12],enfr:[4,51],ensur:[48,51],entri:[22,49],entropi:45,entrypoint:34,environ:[50,51],eos_id:39,equal:39,equival:52,essenti:51,estim:[10,15,20,27,29,34,40,45,52],etc:[1,31,52],european:2,evalu:[6,10,29,31,34,38,44,51,52],evaluators_nam:43,everi:[4,15],every_n_sec:44,every_n_step:44,exampl:[1,2,4,20,29,41,50,51,52],execut:[4,15,48],expand:39,expect:[2,21,50],expected_st:24,extent:2,extern:[37,43,50,51],external_evaluation_fn:43,externalevalu:43,extract:30,extract_batch:46,extract_prefixed_kei:46,factor:17,fals:[11,17,20,22,29,30,31,32,34,40,42,45],fashion:[47,48],feat1:2,featm:2,featur:[29,41],features_fil:[4,29,34],features_length_fn:41,feder:2,feed:[12,18,27,33],feed_forward:27,fetch:[44,51],ffn_inner_dim:[12,18,33],field:[20,21],file:[0,2,4,7,20,21,22,29,30,31,34,37,44,46,49,50,51],filenam:[37,44,46,49],fill:[7,49],filter:[14,41],filter_examples_by_length:41,filter_irregular_batch:41,find:51,finish:39,first:[25,39,52],fit:2,flag:[31,39],flag_bioes_tag:31,flatten:21,float32:[20,21,22,25,27,29],follow:[4,21,22,51],format:[22,29],forward:[12,18,20,27,33],found:[22,49],framework:52,freedom:1,frequenc:49,from:[0,1,2,10,11,12,14,18,19,21,22,24,27,29,30,33,34,39,41,44,46,47,49],full:[10,39],fun:48,fund:2,fused_project:27,futur:[7,27],gather:[20,39],gcc:51,gener:[2,15,20,22,39,46,51],get:[46,51],get_dataset_s:[20,21,22],get_dict_from_collect:46,get_embedding_fn:10,get_length:[20,21,22],get_optimizer_class:47,get_sampling_prob:10,get_serving_input_receiv:20,get_state_shape_invari:39,git:51,given:[20,32,39,51],global_step:[10,42,47],glove:22,gnmt:17,goal:2,gold:31,gold_flag:31,googl:[27,33],googlernnencod:17,gpu:[34,52],gpu_allow_growth:34,gradient:52,graph:[20,22,29,35,41,46,48,50,51,52],graphdispatch:48,graphkei:37,greater:[25,37],greedi:10,group:2,grow:[34,39],grow_al:39,grow_finish:39,gym:2,hand:39,has:[1,2,31,39,52],have:[2,20,22,25,32,39,40],head:[2,12,18,27,33],header:22,hello:51,help:2,helper:[26,40,48],here:[39,51],hidden:[12,18,27,33],high:1,home:51,hook:[6,20,38,43],host:52,how:4,html:0,http:[10,12,14,17,18,25,27,33,39,42],hyperparamet:47,ident:26,identifi:[2,31,49],identity_valu:26,ids:[10,32,39],ids_out:32,ignor:[22,31,42],implement:[1,2,19,27,39,41,44],implemet:39,impos:11,includ:[22,52],incompat:24,incorrectli:31,increas:[4,32,49],independ:52,index:[2,25,39,49,50],infer:[1,3,10,11,12,34,50,51,52],inform:[24,50,52],inherit:[11,47],init:51,initi:[10,11,12,14,15,17,18,20,21,22,24,25,30,31,32,33,34,37,44,48,49],initial_id:39,initial_st:[10,11,12],inner:[11,12,17,18,27,33,40],inner_dim:27,input:[1,10,11,12,14,15,16,17,18,19,20,21,22,25,26,27,29,30,31,32,33,37,40,50],input_fn:29,input_stream:37,inputt:[1,2,5,6,30,31,32,33,51],insensit:[22,30],insid:39,inspect:50,inspir:39,instanc:[1,10,17,34,52],instead:[10,51],instructor:2,int64:21,integ:[11,40,44],integr:52,interfac:39,introspect:39,invalid:[10,30,43],invari:39,italian:2,item:39,item_or_tupl:46,iter:[10,22,46],its:[11,15,16,17,26,40,46,49],join:26,joinreduc:[15,26],keep:4,keep_checkpoint_max:4,kei:[1,2,20,22,27,30,31,32,37,46],kernel:14,kernel_s:[14,22],keyword:48,kill:2,know:50,known:10,kubernet:52,kwarg:48,label:[22,29,30,31,41,43,45],label_smooth:45,labels_fil:[29,43],labels_length_fn:41,labels_vocabulary_file_kei:[30,31],laid:2,larger:52,last:[11,30],latest:[4,34,50],layer:[5,6,10,11,12,14,15,17,18,20,31,33,40],learn:[1,42,47,52],learning_r:[42,47],learning_rate_decay_fn:47,legisl:2,length:[10,15,20,21,22,25,26,27,29,31,32,37,39,40,41,45,48],length_penalti:[10,11,12],level:[1,45],libboost:51,librari:34,like:[22,39,50,52],line:[1,2,19,22,30,31,35,46,49,52],linear:[10,12,18,24,27],list:[7,11,15,20,21,22,26,29,37,40,41,43,48,49,52],load:[7,37,49],load_config:7,load_model:7,load_model_modul:7,load_pretrained_embed:22,localhost:52,log:[10,20,22,39,43,44,52],log_dir:[20,22],log_prob:[10,39],logdir:52,logic:[19,24],logit:[10,11,39,45],logits_to_cum_log_prob:10,logparameterscounthook:44,look:50,lookup:[20,25,49],loop:[34,52],loss:[6,38,47,52],lower:48,lowercas:22,lstmcell:[11,17,40],luongattent:11,machin:52,made:[1,2],mai:39,main:[1,4,34,52],maintain:24,make:[0,7,29,39,41,47,51,52],make_dataset:[20,21,22],make_posit:25,manag:[34,52],mani:[2,4,47],manual:50,map:41,mark:39,mask:27,master:2,match:[22,31],max:26,max_count:4,max_length:27,max_sequence_length:26,max_siz:49,max_word_length:22,maximum:[10,25,27,29,41,49],maximum_features_length:[29,41],maximum_iter:[10,11,12],maximum_labels_length:[29,41],maximum_length:[25,27],maximum_posit:25,mean:[2,16,22,39],mean_encod:[6,13],meanencod:16,mechan:11,memori:[10,11,12,27,34],memory_sequence_length:[10,11,12],merg:[15,17,20,25,26],merge_config:1,meta:22,metadata:[20,22,29,37],method:[20,39],metric:31,middl:39,min_frequ:49,minim:[16,47],minimum:49,minimum_learning_r:47,misc:[6,38,44],miss:31,mix:[1,20],mixedinputt:[1,20],mkdir:51,modal:1,mode:[10,11,12,14,15,16,17,18,20,21,22,27,29,37,40,45,52],modekei:[10,15,20,27,29,40,45],model:[2,4,5,6,7,20,23,27,34,37,39,42,44,50,51],model_dir:[4,7],model_fil:7,model_fn:29,modul:[1,5,6,9,13,19,23,28,35,38],more:[1,29,43,52],mostli:[34,44],multi:[1,11,12,15,18,20,27,40,43,51,52],multi_head_attent:27,multiattentionalrnndecod:11,multiinputt:20,multipl:[11,15,20,27,41,48,52],multipli:[26,29,41],multiplyreduc:26,must:[10,22,24,26,39,48],my_config:[1,4],name:[2,29,30,31,32,33,39,42,43,44,46,47],nation:2,need:[39,50],neg:31,neither:22,nest:[10,20,26,39],newli:51,newlin:2,newstest2014:4,next:[11,29,39],noam_decai:42,node:50,non:[7,48],none:[7,10,11,12,14,15,16,17,18,20,22,24,25,27,29,30,31,32,34,37,39,40,41,42,43,44,46,49],nor:22,norm:[27,52],normal:[27,45],note:[50,52],now:51,num_devic:[29,34,48],num_gpu:52,num_head:[12,18,27,33],num_lay:[11,12,14,17,18,33,40],num_oov_bucket:22,num_output:[22,27],num_shard:48,num_thread:29,num_unit:[10,11,12,14,17,18,27,33,40],number:[10,11,12,14,17,18,22,27,29,33,34,39,40,41,44,46,47,48,49,52],numpi:[21,22,31,46],object:[7,10,12,14,15,17,18,20,22,24,25,26,29,33,34,37,43,48,49],observ:39,occur:43,off:39,offset:26,onc:[20,39],one:[11,20,22,25,30,31,41,43],onli:[0,11,31,32,33,41,51],onmt:51,open:[37,52],opennmt:[0,1,2,3,50,51,52],opennmt_token:[6,35],opennmttoken:51,oper:39,ops:[11,17,39,40],opt:47,optim:[1,6,22,38,41],option:[1,2,4,7,10,22,25,27,29,41,44,51,52],order:[39,41],org:[10,12,14,17,18,25,27,33,39,42],organ:41,other:[1,22,50],otherwis:[15,22,25,27,37],out:[4,41],output:[10,11,12,14,15,17,18,22,27,29,30,32,33,37,39,40,43,44,46,48,50],output_dir:[4,43,44],output_fil:44,output_is_attent:11,output_lay:[10,11,12],output_stream:37,outputs_reduc:15,over:[14,29,52],overrid:11,packag:[0,3,5,51],pad:[20,25,26,39,41],pad_in_tim:26,pad_n_with_ident:26,pad_with_ident:26,padded_batch:20,padded_shap:[20,41],padding_length:26,pair:20,parallel:[6,20,29,38,52],parallelencod:[1,15],parallelinputt:[1,2,20],param:[29,30,31,32,47],paramet:[4,7,10,11,12,14,15,17,18,20,21,22,24,25,26,27,29,30,31,32,33,34,37,39,40,41,42,43,44,45,46,47,48,49,52],parameter:24,parliament:2,parser:35,part:[1,29,41,48,51],pass:[11,24,29],past:47,path:[7,22,34,43,49],pattern:39,pbtxt:22,penal:39,penalti:[10,39],per:[22,30,31],perform:4,period:50,perl:[43,51],permit:39,person:2,pickl:7,pilat:2,pip:0,plugin:51,portal:3,pos:39,posit:[6,12,14,18,23,27,31,33],position_encod:[12,14,18,33],positionembedd:[14,25],positionencod:[12,14,18,25,33],possibl:[7,10,20,26,39],post_evaluation_fn:44,postur:2,pre:27,precis:31,predefin:1,predict:[29,30,31,32,34,43,44,51],predicted_flag:31,predicted_id:10,predictions_fil:[4,34],predictions_path:43,prefer:1,prefetch:29,prefetch_buffer_s:29,prefix:[2,32,39,46],prepar:[2,20,29,32,41,51],prerog:2,pretrain:22,previou:27,print:[29,46],print_byt:46,print_predict:[29,30,31,32],prior:10,prioriti:1,probabl:[10,11,12,14,17,18,20,22,27,33,39,40,45,52],process:[20,22,29,30,31,32,33,39,52],produc:31,product:27,program:2,project:[8,10,27,46],projector_config:22,provabl:39,provid:[1,3,22,39,50,51],provis:2,prune:49,ps_host:52,purchas:2,purpos:2,py_func:50,pyramidalrnnencod:17,python:[0,1,2,4,7,11,17,37,40,44,49,50,51,52],python_io:21,pythonpath:51,queri:[10,27],quot:2,rais:[10,17,22,24,29,30,32,37,40,41,43,47,48],random:[34,41],random_shard:41,rank:37,rate:[42,47,52],raw:[19,20],reach:39,read:[10,21,41,46],read_prob:10,realis:2,recal:31,receiv:20,reciproc:42,recommonmark:0,record:[2,21,39],record_inputt:[6,19],reduc:[6,15,17,20,23,25],reduce_sequ:26,reduced_input:26,reduced_length:26,reduct:17,reduction_factor:17,refer:[24,51],reflect:32,refus:2,regist:[22,37,44],rel:[7,22],relat:[1,7,27,43,47],relu:[12,18,33],relu_dropout:[12,18,33],remov:[0,20],remove_data_field:20,renam:0,repeat:48,replac:11,replic:[27,29,41,48],replica:52,repositori:51,repres:39,requir:[10,20,37,39,50,51],reserv:25,residu:27,residual_connect:[11,17,40],resolv:47,respect:26,result:[22,43,52],retain:26,reusabl:[1,23],rightmost:1,rip:2,rnn:[1,11,17,30,31,32,40],rnn_cell_impl:[11,17,40],rnn_decod:[6,9],rnn_encod:[6,13],rnncell:40,rnndecod:11,rnnencod:17,roll_sequ:26,root:42,rsqrt_decai:42,run:[0,4,7,34,39,43,48,50,52],run_context:44,run_valu:44,runner:[5,6],sai:[2,39],same:[15,20,25,26,27,32,40,41,48],sampl:[1,10,29,51,52],sample_buffer_s:29,sampling_prob:[10,11,12],save:[4,17,34,43,44,49,51],save_checkpoints_step:4,save_vocab:51,saved_model:50,saved_model_cli:50,saveevaluationpredictionhook:[43,44],scale:[2,42],schedul:10,schedule_typ:10,scheme:31,scor:39,score:[27,39,43],scores_to_gath:39,script:[1,2,4,49,50],seach:39,search:[10,39],section:52,see:[1,2,20,51,52],seed:34,select:[29,35,52],self:[1,12,18,27,33],self_attention_decod:[6,9],self_attention_encod:[6,13],selfattentiondecod:12,selfattentionencod:18,semant:42,senior:2,sentenc:[2,37,39,49],separ:[1,2],seq2seq:[11,32,40],seq:39,seq_length:39,seqclassifi:30,seqtagg:31,sequenc:[10,14,15,17,19,22,25,26,27,29,30,31,32,33,37,39,41,45],sequence_classifi:[6,28],sequence_length:[10,11,12,14,15,16,17,18,22,25,26,27,31,37,45],sequence_tagg:[6,28],sequence_to_sequ:[6,28,33],sequenceclassifi:30,sequencerecordinputt:[2,21],sequencetagg:31,sequencetosequ:[32,33,51],sequenti:[15,39],sequentialencod:[1,15],serial:[2,37,49,50],serv:[3,20,29],server:52,serving_default:50,serving_input_fn:29,servinginputreceiv:[20,29],session:44,session_run_hook:44,sessionrunhook:44,set:[1,2,4,10,20,22,24,25,27,29,34,37,39,46,51,52],set_data_field:20,setup:20,sever:[4,15,20,52],shape:[10,15,20,21,22,25,26,27,39,41],shard:[41,48],shard_siz:41,share:[33,52],shell:52,shift:[26,32],shift_target_sequ:32,shortcut:25,shoud:39,should:[1,2,32,37,52],show:50,signatur:[20,47],signature_def:50,similar:41,simpl:[11,16,17,20,22,44],simpli:[1,52],simplifi:2,sine:25,singl:[1,26,29,46,52],single_pass:29,sinusoidalpositionencod:[12,18,25,33],site:2,size:[10,14,20,22,24,25,27,29,39,41,49,51],sleep:2,smooth:45,soldier:2,some:[1,50],sourc:[1,2,7,10,11,12,14,15,16,17,18,20,21,22,24,25,26,27,29,30,31,32,33,34,35,37,39,40,41,42,43,44,45,46,47,48,49,52],source_inputt:[32,33,51],source_tokenizer_config:51,source_words_vocabulari:51,space:[2,22,27,37],spacetoken:[22,37],special:49,special_token:49,specif:[20,23,34],speed:52,sphinx:0,sphinx_rtd_them:0,split:[22,27,29,37,41,48],split_batch:48,split_head:27,squar:42,src:[2,50],staircas:[42,47],standard:[32,37],start:[10,22,32,39,47,49,52],start_decay_step:47,start_token:[10,11,12],state:[2,10,11,15,17,24,39],states_reduc:15,states_to_gath:39,stdout:[37,46],step:[4,10,11,39,42,43,44,47],stepcounterhook:44,stop:[32,39],stop_earli:39,store:39,str_as_byt:46,strageti:[29,41],strategi:41,stream:[29,30,31,32,37,46],stretch:2,stride:22,string:[31,35,37,39,46,47,49],structur:[20,26,48],submodul:[5,51],subpackag:5,sudo:51,suffix:[32,44],sum:26,summar:44,summari:52,summary_writ:44,sumreduc:[17,25,26],support:[31,32,33,37,50,52],sybmol:39,symbol:39,symbols_to_logits_fn:39,synchron:52,synergi:2,sys:46,tabl:[20,25],table_initi:20,tag:31,tag_set:50,tagger:31,tagging_schem:31,take:[10,11,16,17,39,40,44],target:[2,10,32,33,41],target_inputt:[32,33,51],target_tokenizer_config:51,target_words_vocabulari:51,task:52,task_index:52,task_typ:52,templat:1,tensor2tensor:48,tensor:[10,20,21,22,25,26,27,32,35,37,39,44,46,48],tensorboard:[22,44,52],tensorflow:[11,17,40,44,50,52],term:2,test:[0,51],text:[19,22,37,49,50,51],text_inputt:[6,19,32,33],textinputt:[2,22,51],tfdbg:39,tfrecord:[2,21],tfrecordwrit:21,tgt:50,than:[25,37,48],thei:[1,2],them:2,thi:[2,3,4,11,20,22,25,30,31,32,33,34,39,41,43,44,46,47,50,52],thing:39,third_parti:51,thoughout:8,three:39,throughout:46,tile:27,tile_sequence_length:27,time:[17,21,25,26,27,39,45,52],titl:2,toi:[1,2,50],tok:4,token:[2,3,5,6,10,22,29,32,41,45,49,50],tokenize_stream:37,tokenize_text:51,tokenizer_config:51,tokens_to_char:22,tokp_gathered_scor:39,told:2,tool:51,top:39,topk:39,topk_finished_flag:39,topk_gathered_scor:39,topk_seq:39,total:[20,41,46],train:[1,2,3,4,10,11,12,14,15,16,17,18,20,22,29,34,41,44,45,47,50,51],train_and_evalu:[34,52],train_features_fil:2,train_source_1:2,train_source_2:2,train_source_3:2,trainabl:[22,44,46],trainer:2,transform:[6,12,18,19,20,21,22,23,24,28,35,41],transform_data:20,tupl:[10,15,26,27,31,39,45,46],two:2,txt:[2,50,51],type:[10,21,22,25,27,39,47,50],typeerror:[10,32],typic:50,ubuntu:51,under:51,unicod:[22,37],unidirectionalrnnencod:17,uniqu:39,unit:[11,12,14,17,18,20,22,27,33,40],unknown:22,unless:2,unscal:45,unsur:1,unused_data:20,updat:[20,32,51,52],url:52,usag:2,use:[0,27,29,34,37,39,41,46,50,51,52],used:[1,2,4,8,10,17,25,29,31,34,37,39,43,48,50,51,52],user:[1,20,29,37,52],uses:52,using:[1,2,11,12,17,18,39,50,51],usual:[4,10,20,25],util:[5,6],val1:22,val2:22,valid:48,valm:22,valu:[1,8,10,20,21,25,26,27,29,39,44,45,46,47,49],valueerror:[10,17,22,24,29,30,37,40,41,43,47,48],variabl:[21,22,30,31,32,48,50],variant:22,variou:[38,46],vector:[19,21,22,27,30],version:[37,49],view:46,visibl:48,visual:[20,22,39,52],visualize_embed:22,vocab:[6,38,39,50,51],vocab_s:[10,11,12,39],vocabulari:[10,22,30,31,49,50,51],vocabulary_fil:22,vocabulary_file_kei:[22,51],vocabulary_s:22,volatil:20,warmup:42,warn:39,watch:39,wave:25,weight:[10,50],welcom:1,when:[2,10,17,29,31,39,50],where:[2,10,25,26,27,41,48,49,52],whether:39,which:[2,11,20,26,29,39,40,43,44],whose:2,width:[10,29,41],window:22,with_head:22,within:20,word1:22,word2:22,word:[1,10,22,52],wordcounterhook:44,wordembedd:[22,32,33,51],wordn:22,work:[1,35],worker:52,worker_host:52,workflow:51,world:51,wrapper:[11,34],write:[21,49],write_sequence_record:21,writer:21,yaml:[1,2,37,51],yml:[1,4,51],you:[1,2,50],your:[2,4,50,51,52],zerobridg:[11,24],zip:26,zip_and_reduc:26},titles:["Documentation","Configuration","Data","Overview","Inference","opennmt","opennmt package","opennmt.config module","opennmt.constants module","opennmt.decoders package","opennmt.decoders.decoder module","opennmt.decoders.rnn_decoder module","opennmt.decoders.self_attention_decoder module","opennmt.encoders package","opennmt.encoders.conv_encoder module","opennmt.encoders.encoder module","opennmt.encoders.mean_encoder module","opennmt.encoders.rnn_encoder module","opennmt.encoders.self_attention_encoder module","opennmt.inputters package","opennmt.inputters.inputter module","opennmt.inputters.record_inputter module","opennmt.inputters.text_inputter module","opennmt.layers package","opennmt.layers.bridge module","opennmt.layers.position module","opennmt.layers.reducer module","opennmt.layers.transformer module","opennmt.models package","opennmt.models.model module","opennmt.models.sequence_classifier module","opennmt.models.sequence_tagger module","opennmt.models.sequence_to_sequence module","opennmt.models.transformer module","opennmt.runner module","opennmt.tokenizers package","opennmt.tokenizers.opennmt_tokenizer module","opennmt.tokenizers.tokenizer module","opennmt.utils package","opennmt.utils.beam_search module","opennmt.utils.cell module","opennmt.utils.data module","opennmt.utils.decay module","opennmt.utils.evaluator module","opennmt.utils.hooks module","opennmt.utils.losses module","opennmt.utils.misc module","opennmt.utils.optim module","opennmt.utils.parallel module","opennmt.utils.vocab module","Serving","Tokenization","Training"],titleterms:{autodoc:0,averag:4,beam_search:39,bridg:24,build:0,cell:40,checkpoint:4,config:7,configur:1,constant:8,conv_encod:14,data:[2,41],decai:42,decod:[9,10,11,12],depend:0,distribut:52,document:0,encod:[13,14,15,16,17,18],evalu:43,file:1,format:2,hook:44,infer:4,input:2,inputt:[19,20,21,22],instal:[0,51],layer:[23,24,25,26,27],local:0,loss:45,mean_encod:16,misc:46,model:[1,28,29,30,31,32,33],modul:[7,8,10,11,12,14,15,16,17,18,20,21,22,24,25,26,27,29,30,31,32,33,34,36,37,39,40,41,42,43,44,45,46,47,48,49],monitor:52,multipl:1,note:51,opennmt:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],opennmt_token:36,optim:47,overview:3,packag:[6,9,13,19,23,28,35,38],parallel:[2,48],paramet:1,posit:25,record_inputt:21,reduc:26,regist:0,replic:52,rnn_decod:11,rnn_encod:17,runner:34,self_attention_decod:12,self_attention_encod:18,sequence_classifi:30,sequence_tagg:31,sequence_to_sequ:32,serv:50,sourc:0,submodul:[6,9,13,19,23,28,35,38],subpackag:6,text:2,text_inputt:22,token:[35,36,37,51],train:52,transform:[27,33],usag:51,util:[38,39,40,41,42,43,44,45,46,47,48,49],vector:2,vocab:49}})