export default {
    aor: {
        action: {
            delete: 'Deleta',
            show: 'Show',
            list: 'Lista',
            save: 'Salvar',
            create: 'Novo',
            edit: 'Editar',
            cancel: 'Cancelar',
            refresh: 'Atualizar',
            add_filter: 'Add filtro',
            remove_filter: 'Remover filtro',
            back: 'Voltar',
        },
        boolean: {
            true: 'Sim',
            false: 'Não',
        },
        page: {
            list: '%{name} Lista',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Novo %{name}',
            delete: 'Deletar %{name} #%{id}',
            dashboard: 'Dashboard',
            not_found: 'Não Encontrado',
        },
        input: {
            file: {
                upload_several:
                    'Drop some files to upload, or click to select one.',
                upload_single: 'Drop a file to upload, or click to select it.',
            },
            image: {
                upload_several:
                    'Drop some pictures to upload, or click to select one.',
                upload_single:
                    'Drop a picture to upload, or click to select it.',
            },
        },
        message: {
            yes: 'Sim',
            no: 'Não',
            are_you_sure: 'Are you sure?',
            about: 'Sobre',
            not_found:
                'Either you typed a wrong URL, or you followed a bad link.',
        },
        navigation: {
            no_results: 'No results found',
            page_out_of_boundaries: 'Page number %{page} out of boundaries',
            page_out_from_end: 'Cannot go after last page',
            page_out_from_begin: 'Cannot go before page 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
            next: 'Próximo',
            prev: 'Anterior',
        },
        auth: {
            username: 'Usuário',
            password: 'Senha',
            sign_in: 'Entrar',
            sign_in_error: 'Authentication failed, please retry',
            logout: 'Logout',
        },
        notification: {
            updated: 'Element updated',
            created: 'Element created',
            deleted: 'Element deleted',
            item_doesnt_exist: 'Element does not exist',
            http_error: 'Server communication error',
        },
        validation: {
            required: 'Required',
            minLength: 'Must be %{min} characters at least',
            maxLength: 'Must be %{max} characters or less',
            minValue: 'Must be at least %{min}',
            maxValue: 'Must be %{max} or less',
            number: 'Must be a number',
            email: 'Must be a valid email',
        },
    },
};
