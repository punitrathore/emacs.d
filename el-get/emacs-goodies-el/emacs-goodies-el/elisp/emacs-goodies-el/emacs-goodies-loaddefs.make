 emacs -batch --no-site-file --multibyte --eval '(setq load-path (cons "." load-path))' -l autoload --eval '(setq generated-autoload-file (expand-file-name "emacs-goodies-loaddefs.el"))' --eval '(setq make-backup-files nil)' -f batch-update-autoloads .