interface LevelColor {
    minCommits: number;
    color: string;
}

interface CommitsSVG {
    rows: number;
    space: number;
    rectWidth: number;
    levelColors: LevelColor[];
}

interface LanguageSVGConfig {
    barHeight: number;
    barWidth: number;
    lineSpacing: number;
    languageNameWidth: number;
    fontSize: number;
}

interface GithubStats {
    // TODO
}

interface Repo {
    full_name: string;
    // tslint:disable-next-line: no-any
    private?: any;
}

interface JsonCacheOptionsMap {
    repos: Repo[];
    repoLanguages: DefinedLanguage[];
}

type JsonCacheType = keyof JsonCacheOptionsMap;

type LanguageCountMap = { [key in DefinedLanguage]?: number };

type DefinedLanguage = '1C Enterprise' |
'ABAP' |
'ActionScript' |
'Ada' |
'Agda' |
'AGS Script' |
'Alloy' |
'AMPL' |
'AngelScript' |
'ANTLR' |
'API Blueprint' |
'APL' |
'AppleScript' |
'Arc' |
'ASP' |
'AspectJ' |
'Assembly' |
'ATS' |
'AutoHotkey' |
'AutoIt' |
'Ballerina' |
'Batchfile' |
'BlitzMax' |
'Boo' |
'Brainfuck' |
'C' |
'C#' |
'C++' |
'Ceylon' |
'Chapel' |
'Cirru' |
'Clarion' |
'Clean' |
'Click' |
'Clojure' |
'CoffeeScript' |
'ColdFusion' |
'Common Lisp' |
'Common Workflow Language' |
'Component Pascal' |
'Crystal' |
'CSS' |
'Cuda' |
'D' |
'Dart' |
'DataWeave' |
'DM' |
'Dockerfile' |
'Dogescript' |
'Dylan' |
'E' |
'eC' |
'ECL' |
'Eiffel' |
'Elixir' |
'Elm' |
'Emacs Lisp' |
'EmberScript' |
'EQ' |
'Erlang' |
'F#' |
'Factor' |
'Fancy' |
'Fantom' |
'FLUX' |
'Forth' |
'Fortran' |
'FreeMarker' |
'Frege' |
'Game Maker Language' |
'Genie' |
'Gherkin' |
'Glyph' |
'Gnuplot' |
'Go' |
'Golo' |
'Gosu' |
'Grammatical Framework' |
'Groovy' |
'Hack' |
'Harbour' |
'Haskell' |
'Haxe' |
'HiveQL' |
'HTML' |
'Hy' |
'IDL' |
'Idris' |
'Io' |
'Ioke' |
'Isabelle' |
'J' |
'Java' |
'JavaScript' |
'Jolie' |
'JSONiq' |
'Julia' |
'Jupyter Notebook' |
'Kotlin' |
'KRL' |
'Lasso' |
'Lex' |
'LFE' |
'LiveScript' |
'LLVM' |
'LOLCODE' |
'LookML' |
'LSL' |
'Lua' |
'Makefile' |
'Mask' |
'Matlab' |
'Max' |
'MAXScript' |
'Mercury' |
'Meson' |
'Metal' |
'Mirah' |
'MQL4' |
'MQL5' |
'MTML' |
'NCL' |
'Nearley' |
'Nemerle' |
'nesC' |
'NetLinx' |
'NetLinx+ERB' |
'NetLogo' |
'NewLisp' |
'Nextflow' |
'Nim' |
'Nit' |
'Nix' |
'Nu' |
'Objective-C' |
'Objective-C++' |
'Objective-J' |
'OCaml' |
'Omgrofl' |
'ooc' |
'Opal' |
'Oxygene' |
'Oz' |
'P4' |
'Pan' |
'Papyrus' |
'Parrot' |
'Pascal' |
'PAWN' |
'Pep8' |
'Perl' |
'Perl 6' |
'PHP' |
'PigLatin' |
'Pike' |
'PLSQL' |
'PogoScript' |
'PostScript' |
'PowerBuilder' |
'PowerShell' |
'Processing' |
'Prolog' |
'Propeller Spin' |
'Puppet' |
'PureBasic' |
'PureScript' |
'Python' |
'q' |
'QML' |
'R' |
'Racket' |
'Ragel' |
'RAML' |
'Rascal' |
'Rebol' |
'Red' |
'Ren\'Py' |
'Ring' |
'Roff' |
'Rouge' |
'Ruby' |
'RUNOFF' |
'Rust' |
'SaltStack' |
'SAS' |
'Scala' |
'Scheme' |
'sed' |
'Self' |
'Shell' |
'Shen' |
'Slash' |
'Smalltalk' |
'Solidity' |
'SourcePawn' |
'SQF' |
'Squirrel' |
'SRecode Template' |
'Stan' |
'Standard ML' |
'SuperCollider' |
'Swift' |
'SystemVerilog' |
'Tcl' |
'Terra' |
'TeX' |
'TI Program' |
'Turing' |
'TypeScript' |
'UnrealScript' |
'Vala' |
'VCL' |
'Verilog' |
'VHDL' |
'Vim script' |
'Visual Basic' |
'Volt' |
'Vue' |
'wdl' |
'WebAssembly' |
'wisp' |
'X10' |
'xBase' |
'XC' |
'XQuery' |
'XSLT' |
'Yacc' |
'Zephir';
